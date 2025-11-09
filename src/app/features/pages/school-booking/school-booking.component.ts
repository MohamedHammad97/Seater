import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';
import * as L from 'leaflet';
import { SearchResult } from '../../interfaces/search-result';

@Component({
  selector: 'app-school-booking',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './school-booking.component.html',
  styleUrl: './school-booking.component.css',
})
export class SchoolBookingComponent implements OnInit, OnDestroy {
  registerDetailsForm!: FormGroup;
  isLoading = false;
  apiError = '';
  isNotValidForm = false;
  showSuccessModal = false;
  sub: Subscription = new Subscription();

  showMapModal = false;
  isLocating = false;
  selectedLatLng: { lat: number; lng: number } | null = null;
  map: L.Map | null = null;
  marker: L.Marker | null = null;
  searchResults: SearchResult[] = [];
  searchTimeout: any = null;
  selectedSearchResultAddress: string | null = null;

  private _fb = inject(FormBuilder);
  private platformId = inject(PLATFORM_ID);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerDetailsForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.maxLength(12)]],
      phone2: ['', [Validators.required, Validators.maxLength(12)]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      schoolName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      schoolLocation: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      students: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      educationalSection: ['', [Validators.required]],
      educationalStage: ['', [Validators.required]],
      carType: ['', [Validators.required]],
      subscribedBefore: ['', [Validators.required]],
      comment: ['', [Validators.minLength(5), Validators.maxLength(500)]],
      latitude: [null],
      longitude: [null]
    });
  }


  registeration() {
    if (this.registerDetailsForm.invalid) {
      this.isNotValidForm = true;
      this.registerDetailsForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.apiError = '';

    if (this.sub) this.sub.unsubscribe();
    this.sub = this._authService.registerDetailsForm(this.registerDetailsForm.value).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.showSuccessModal = true;
      },
      error: (err) => {
        this.isLoading = false;
        this.apiError = err.error?.message;
      },
    });
  }

  // Map Modal
  openMap() {
    this.showMapModal = true;

    setTimeout(() => {
      if (this.map) this.map.remove();
      this.map = L.map('map', {
        center: [31.2001, 29.9187],
        zoom: 13
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      // user current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            this.map!.setView([latitude, longitude], 14);
            if (this.marker) this.marker.remove();
            this.marker = L.marker([latitude, longitude]).addTo(this.map!);
            this.selectedLatLng = { lat: latitude, lng: longitude };
          },
          () => console.warn('Could not get user location, defaulting to Alexandria.')
        );
      }

      // Allow user to pick a different Location
      this.map.on('click', (e: L.LeafletMouseEvent) => {
        if (this.marker) this.marker.remove();
        this.marker = L.marker(e.latlng).addTo(this.map!);
        this.selectedLatLng = e.latlng;
      });
    }, 200);
  }


  confirmLocation() {
    if (this.selectedLatLng) {
      const { lat, lng } = this.selectedLatLng;
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
        .then((res) => res.json())
        .then((data) => {
          const address = data.display_name || `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;
          this.registerDetailsForm.patchValue({
            address,
            latitude: lat,
            longitude: lng
          });
        });
    }
    this.closeMap();
  }

  closeMap() {
    this.showMapModal = false;
    if (this.map) {
      this.map.off();
      this.map.remove();
      this.map = null;
    }
  }

  useCurrentLocation() {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    this.isLocating = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        if (this.map) {
          this.map.setView([lat, lng], 15);
          if (this.marker) this.marker.remove();
          this.marker = L.marker([lat, lng]).addTo(this.map);
          this.selectedLatLng = { lat, lng };
        }

        this.isLocating = false;
      },
      (error) => {
        console.error('Error getting location', error);
        alert('Could not get your current location.');
        this.isLocating = false;
      }
    );
  }

  searchLocationLive(event: Event) {
    if (!isPlatformBrowser(this.platformId)) return;

    const query = (event.target as HTMLInputElement).value;
    this.searchResults = [];
    if (this.searchTimeout) clearTimeout(this.searchTimeout);

    if (query.length < 3) return;

    this.searchTimeout = setTimeout(() => {
      const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&countrycodes=eg&limit=10`;
      fetch(url)
        .then(res => res.json())
        .then((data: SearchResult[]) => {
          this.searchResults = data;
        })
        .catch(error => {
          console.error('Search failed:', error);
          this.searchResults = [];
        });
    }, 100);
  }

  selectSuggestion(result: SearchResult) {
    if (!isPlatformBrowser(this.platformId)) return;

    this.searchResults = [];
    const lat = result.lat;
    const lng = result.lon;
    this.selectedLatLng = { lat, lng };
    this.selectedSearchResultAddress = result.display_name;

    if (this.map) {
      this.map.setView([lat, lng], 15);
      if (this.marker) this.marker.remove();
      this.marker = L.marker([lat, lng]).addTo(this.map);
    }
  }

  closeModal() {
    this.showSuccessModal = false;
    this._router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
    if (this.map) this.map.remove();
  }

}

import { Component, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as L from 'leaflet';
import { SearchResult } from '../../interfaces/search-result';
import { SpecialRequestService } from '../../services/special-request.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-request-booking',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './special-request-booking.component.html',
  styleUrl: './special-request-booking.component.css'
})

export class SpecialRequestBookingComponent implements OnInit, OnDestroy {

  private fb = inject(FormBuilder);
  private platformId = inject(PLATFORM_ID);
  private _specialRequestService = inject(SpecialRequestService);
  private _router = inject(Router);


  specialForm!: FormGroup;
  isLoading = false;
  showSuccessModal = false;
  isCallingAPI: boolean = false;
  apiError: string = '';
  sub: Subscription = new Subscription();
  isNotValidForm = false;
  isLocating = false;

  map: L.Map | null = null;
  marker: L.Marker | null = null;
  selectedType: 'pickup' | 'dropoff' | null = null;
  showMapModal = false;
  selectedLatLng: { lat: number; lng: number } | null = null;
  searchResults: SearchResult[] = [];
  searchTimeout: any = null;
  selectedSearchResultAddress: string | null = null; 

  cars = [
    { name: 'Private Car', image: 'Icons/bus.jfif' },
    { name: 'Toyota Hiace', image: 'Icons/Vector Smart Object.jfif' },
    { name: 'Hyundai H-1', image: 'Icons/Vector Smart Object.jfif' },
    { name: 'Bus', image: 'Icons/bus.jfif' },
  ];

  ngOnInit(): void {
    this.specialRequestForm()
  }

  specialRequestForm() {
    this.specialForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]],
      days: ['', [Validators.required, Validators.min(1)]],
      pickupTime: ['', Validators.required],
      timeout: ['', Validators.required],
      carType: ['', Validators.required],
      pickupLocation: ['', Validators.required],
      dropoffLocation: ['', Validators.required],
      pickupLat: [null],
      pickupLng: [null],
      dropoffLat: [null],
      dropoffLng: [null],
    });
  }

  bookingForm() {
    if (this.specialForm.invalid) {
      this.specialForm.markAllAsTouched();
      this.isNotValidForm = true;
      return;
    } 
      this.apiError = '';
      this.isCallingAPI = true;
      if (this.sub) this.sub.unsubscribe();

      this.sub = this._specialRequestService.bookingForm(this.specialForm.value).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this.showSuccessModal = true;
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error?.message;
        },
        complete: () => {
          console.log("done");
          this.isCallingAPI = false
        }
      });
  }

  openMap(type: 'pickup' | 'dropoff') {
    if (!isPlatformBrowser(this.platformId)) return;

    this.selectedType = type;
    this.showMapModal = true;
    this.searchResults = []; 

      setTimeout(() => {
        if (this.map) this.map.remove();
        this.map = L.map('map', {
          center: [31.2001, 29.9187],
          zoom: 10,
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(this.map);

        // Handle map click for manual selection
        this.map.on('click', (e: L.LeafletMouseEvent) => {
          if (this.marker) this.marker.remove();
          this.marker = L.marker(e.latlng).addTo(this.map!);
          this.selectedLatLng = e.latlng;
          this.selectedSearchResultAddress = null; 
          this.searchResults = []; 
        });
        const currentLat = type === 'pickup' ? this.specialForm.value.pickupLat : this.specialForm.value.dropoffLat;
        const currentLng = type === 'pickup' ? this.specialForm.value.pickupLng : this.specialForm.value.dropoffLng;

        if (currentLat && currentLng) {
          this.selectedLatLng = { lat: currentLat, lng: currentLng };
          this.map.setView(this.selectedLatLng, 15);
          this.marker = L.marker(this.selectedLatLng).addTo(this.map);
        }
      }, 200);
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

  // Confirm location, patch form, and reverse geocode
  confirmLocation() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.selectedLatLng) return;

    const { lat, lng } = this.selectedLatLng;

    if (this.selectedSearchResultAddress) {
      this.patchLocation(this.selectedSearchResultAddress, lat, lng);
      this.closeMap();
    } else {
      this.isLocating = true;
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          const address = data.display_name || `Lat: ${lat}, Lng: ${lng}`;
          this.patchLocation(address, lat, lng);
        })
        .finally(() => {
          this.isLocating = false;
          this.closeMap();
        });
    }
  }

  patchLocation(address: string, lat: number, lng: number) {
    const patchData: any = {};
    if (this.selectedType === 'pickup') {
      patchData.pickupLocation = address;
      patchData.pickupLat = lat;
      patchData.pickupLng = lng;
    } else if (this.selectedType === 'dropoff') {
      patchData.dropoffLocation = address;
      patchData.dropoffLat = lat;
      patchData.dropoffLng = lng;
    }
    this.specialForm.patchValue(patchData);
  }

  closeMap() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.showMapModal = false;
    if (this.map) {
      this.map.off();
      this.map.remove();
      this.map = null;
    }
    this.marker = null;
    this.selectedLatLng = null; 
    this.selectedSearchResultAddress = null; 
    this.searchResults = []; 
    if (this.searchTimeout) clearTimeout(this.searchTimeout);
  }

  useCurrentLocation() {
    if (!isPlatformBrowser(this.platformId)) {
      alert('Geolocation is not available on the server.');
      return;
    }

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser. Please select a location manually.');
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
          this.marker = L.marker([lat, lng]).addTo(this.map!);


          this.selectedLatLng = { lat, lng };
          this.selectedSearchResultAddress = null;
        }

        this.isLocating = false;
      },
      (error) => {
        console.error('Error getting location', error);
        alert('Could not get your current location. Please ensure location services are enabled.');
        this.isLocating = false;
      }
    );
  }

  selectCar(car: any) {
    this.specialForm.patchValue({ carType: car.name });
  }

  closeModal() {
    this.showSuccessModal = false;
    this._router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.map) this.map.remove();
  }
}
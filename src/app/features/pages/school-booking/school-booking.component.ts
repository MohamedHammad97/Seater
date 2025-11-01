import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';

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

  private _fb = inject(FormBuilder);
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
        this.apiError = err.error?.message || 'Something went wrong';
      },
    });
  }

  closeModal() {
    this.showSuccessModal = false;
    this._router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}

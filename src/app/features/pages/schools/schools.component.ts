import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schools',
  imports: [],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css'
})
export class SchoolsComponent {

  private _router = inject(Router);

  goToSchoolBooking() {
    this._router.navigate(['/schoolBooking']);

  }
}

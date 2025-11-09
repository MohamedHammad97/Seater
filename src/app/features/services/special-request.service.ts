import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecialRequestBooking } from '../interfaces/special-request-booking';

@Injectable({
  providedIn: 'root'
})
export class SpecialRequestService {

  private _httpClient = inject(HttpClient);

  constructor() { }

  bookingForm(RequestData: SpecialRequestBooking): Observable<any> {
      return this._httpClient.post(`http://localhost:3000/api/v1/specialRequestBooking`, RequestData);
    }
}

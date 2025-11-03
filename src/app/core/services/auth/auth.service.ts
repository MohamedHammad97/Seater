import { HttpClient } from '@angular/common/http';
import { afterNextRender, inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthUser, LoginUser, SchoolFormData } from '../../interfaces/auth-user';
import { jwtDecode } from "jwt-decode";
import { API_BASE_URL } from '../../../token/api-token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:BehaviorSubject<any>= new BehaviorSubject(null)
  private _httpClient = inject(HttpClient);
  private _router = inject(Router)

  _baseURL = inject(API_BASE_URL)
  
  constructor() {
    afterNextRender(() => {
      this.isLoggedinUser()

    })
   
   }

  registerUser(userInfo: AuthUser): Observable<any> {
    return this._httpClient.post(`http://localhost:3000/api/v1/user`, userInfo);
    // return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userInfo);
  }

  loginUser(userInfo: LoginUser): Observable<any> {
    return this._httpClient.post(`http://localhost:3000/api/v1/auth/signin`, userInfo);
    // return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, userInfo);
  }

  saveUser() {
    const data = jwtDecode(localStorage.getItem("userToken")!)
    this.user.next(data)
  }

  isLoggedinUser():boolean {
    if (localStorage.getItem("userToken")) {
      this.user.next(jwtDecode(localStorage.getItem("userToken")!))
      return true
    } else {
      return false
    }
  }

  logOut() {
    localStorage.removeItem("userToken")
    this.user.next(null)
    this._router.navigate(['/auth/login'])
  }

  registerDetailsForm(data: SchoolFormData): Observable<any> {
    return this._httpClient.post(`http://localhost:3000/api/v1/formDetails`, data)
    // return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, data)
  }
}





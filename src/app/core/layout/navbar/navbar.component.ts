import { Component,HostListener, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass , AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isLogedIn: any
  logoSrc = 'qt=q_95.jfif';

  private _authService = inject(AuthService);
  private _router = inject(Router)


  constructor() { }
  
  ngOnInit(): void {
    this.checkLoginStatus()
    this.checkMenuOpen()
  }

  checkLoginStatus() {
     this._authService.user.asObservable()
    this.isLogedIn = this._authService.user
  }

  signOut() {
    this._authService.logOut()
    
  }

  checkMenuOpen() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
      }
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; 
    this.logoSrc = this.isScrolled ? 'New folder/seater_logo_white1.png' : 'qt=q_95.jfif'; 
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}

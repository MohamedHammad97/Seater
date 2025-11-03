import { Component,HostListener, inject, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgClass, NgStyle } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass, AsyncPipe, NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Input() theme: 'auth' | 'default' = 'default';

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

  get navbarBackground(): string {
    if (this.theme === 'auth') {
      return 'linear-gradient(45deg,#1488CC,#2B32B2)';
    }
    return this.isScrolled ? 'linear-gradient(45deg,#1488CC,#2B32B2)' : 'transparent';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 30; 
    this.logoSrc = this.isScrolled ? 'New folder/seater_logo_white1.png' : 'qt=q_95.jfif'; 
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}

import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite.service';
import { FooterComponent } from "./core/layout/footer/footer.component";
import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'seaterApp';

  currentRoute: string = '';
  showNavbar = true;

  _flowbiteService = inject(FlowbiteService)
  _router = inject(Router)


  constructor() { }

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
      console.log("Flowbite loaded", flowbite);

    });
    this.navBarBackground()
  }

  navBarBackground() {
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
        this.showNavbar = !['/auth', '/auth/login'].includes(this.currentRoute);
      });
  }

  hasAuthBackground(): boolean {
    return ['/about', '/about-details', '/contact', '/services-info', '/schools', '/business', '/special-request', '/tracking'].includes(this.currentRoute);
  }
}
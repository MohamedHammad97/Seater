import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { loggedUserGuard } from './core/guards/auth/logged-user.guard';

export const routes: Routes = [
    {
        path: "auth", component: AuthLayoutComponent, children: [
            { path: "", canActivate: [loggedUserGuard], loadComponent: () => import('./core/pages/register/register.component').then(c => c.RegisterComponent) },
            { path: "login", canActivate: [loggedUserGuard], loadComponent: () => import('./core/pages/login/login.component').then(c => c.LoginComponent) },
            { path: "forget-password", canActivate: [loggedUserGuard], loadComponent: () => import('./core/pages/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent) },
        ]
    },
    { path: "", loadComponent: () => import('./features/pages/home/home.component').then(c => c.HomeComponent) },
    { path: "home", loadComponent: () => import('./features/pages/home/home.component').then(c => c.HomeComponent) },
    { path: "about", loadComponent: () => import('./features/pages/about/about.component').then(c => c.AboutComponent) },
    { path: "about-details", loadComponent: () => import('./features/pages/about-details/about-details.component').then(c => c.AboutDetailsComponent) },
    { path: "contact", loadComponent: () => import('./features/pages/contact/contact.component').then(c => c.ContactComponent) },
    { path: "services-info", loadComponent: () => import('./features/pages/services-info/services-info.component').then(c => c.ServicesInfoComponent) },
    { path: "schools", loadComponent: () => import('./features/pages/schools/schools.component').then(c => c.SchoolsComponent) },
    { path: "schoolBooking", loadComponent: () => import('./features/pages/school-booking/school-booking.component').then(c => c.SchoolBookingComponent) },
    { path: "business", canActivate: [authGuard], loadComponent: () => import('./features/pages/business/business.component').then(c => c.BusinessComponent) },
    { path: "special-request", canActivate: [authGuard], loadComponent: () => import('./features/pages/special-request/special-request.component').then(c => c.SpecialRequestComponent) },
    { path: "tracking", canActivate: [authGuard], loadComponent: () => import('./features/pages/tracking/tracking.component').then(c => c.TrackingComponent) },



    { path: "**", loadComponent: () => import('./core/pages/not-found/not-found.component').then(c => c.NotFoundComponent) },
];

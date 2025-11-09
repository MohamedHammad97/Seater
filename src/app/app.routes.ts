import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { loggedUserGuard } from './core/guards/auth/logged-user.guard';
import { DashboardLayoutComponent } from './dashboard/layout/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
    {
        path: "auth", component: AuthLayoutComponent, children: [
            { path: "", canActivate: [loggedUserGuard], loadComponent: () => import('./core/pages/register/register.component').then(c => c.RegisterComponent) },
            { path: "login", canActivate: [loggedUserGuard], loadComponent: () => import('./core/pages/login/login.component').then(c => c.LoginComponent) },
            { path: "forget-password", canActivate: [loggedUserGuard], loadComponent: () => import('./core/pages/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent) },
        ]
    },
    {
        path: "dashboard", component: DashboardLayoutComponent, children: [
            {path:"", redirectTo:"dashboard",pathMatch:"full"},
            { path:"dashboard",loadComponent:()=>import('./dashboard/pages/dashboard/dashboard.component').then(c => c.DashboardComponent)},
            { path:"trips",loadComponent:()=>import('./dashboard/pages/trips/trips.component').then(c => c.TripsComponent)},
            { path:"vehicles",loadComponent:()=>import('./dashboard/pages/vehicles/vehicles.component').then(c => c.VehiclesComponent)},
            { path:"drivers",loadComponent:()=>import('./dashboard/pages/drivers/drivers.component').then(c => c.DriversComponent)},
            { path:"clients",loadComponent:()=>import('./dashboard/pages/clients/clients.component').then(c => c.ClientsComponent)},
            { path:"analytics",loadComponent:()=>import('./dashboard/pages/analytics/analytics.component').then(c => c.AnalyticsComponent)},
            { path:"notifications",loadComponent:()=>import('./dashboard/pages/notifications/notifications.component').then(c => c.NotificationsComponent)},
            { path:"settings",loadComponent:()=>import('./dashboard/pages/settings/settings.component').then(c => c.SettingsComponent)},
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
    { path: "special-request-booking", loadComponent: () => import('./features/pages/special-request-booking/special-request-booking.component').then(c => c.SpecialRequestBookingComponent) },
    { path: "business", canActivate: [authGuard], loadComponent: () => import('./features/pages/business/business.component').then(c => c.BusinessComponent) },
    { path: "special-request", canActivate: [authGuard], loadComponent: () => import('./features/pages/special-request/special-request.component').then(c => c.SpecialRequestComponent) },
    { path: "tracking", canActivate: [authGuard], loadComponent: () => import('./features/pages/tracking/tracking.component').then(c => c.TrackingComponent) },



    { path: "**", loadComponent: () => import('./core/pages/not-found/not-found.component').then(c => c.NotFoundComponent) },
];

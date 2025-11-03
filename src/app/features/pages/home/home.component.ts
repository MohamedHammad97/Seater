// import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
// import Typed from 'typed.js';
// import { WhySeaterComponent } from "../why-seater/why-seater.component";
// import { AboutComponent } from "../about/about.component";
// import { PartenersComponent } from "../parteners/parteners.component";
// import { ContactComponent } from "../contact/contact.component";
// import { ServicesComponent } from "../services/services.component";

// @Component({
//   selector: 'app-home',
//   imports: [WhySeaterComponent, AboutComponent, PartenersComponent, ContactComponent, ServicesComponent],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent implements AfterViewInit, OnDestroy {
//   private typed!: Typed;

//   @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

//   ngAfterViewInit(): void {
//     const options = {
//       strings: [' Students', ' Corporate', ' Family'],
//       typeSpeed: 100,
//       backSpeed: 50,
//       loop: true,
//     };

//     this.typed = new Typed(this.typedElement.nativeElement, options);
//   }

//   ngOnDestroy(): void {
//     if (this.typed) {
//       this.typed.destroy();
//     }
//   }
// }



import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';

import { WhySeaterComponent } from "../why-seater/why-seater.component";
import { AboutComponent } from "../about/about.component";
import { PartenersComponent } from "../parteners/parteners.component";
import { ContactComponent } from "../contact/contact.component";
import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-home',
  imports: [WhySeaterComponent, AboutComponent, PartenersComponent, ContactComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private typed!: Typed;

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngAfterViewInit(): void {
    // ✅ Only run Typed.js in browser (not during SSR)
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: [' Students', ' Corporate', ' Family'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      };

      this.typed = new Typed(this.typedElement.nativeElement, options);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.typed) {
      this.typed.destroy();
    }
  }
}

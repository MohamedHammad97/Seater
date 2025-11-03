import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-parteners',
  imports: [CarouselModule],
  templateUrl: './parteners.component.html',
  styleUrl: './parteners.component.css'
})
export class PartenersComponent {
  customOptions: any;
  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.customOptions = {
        loop: true,
        margin: 80,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        responsive: {
          0: { items: 1 },
          640: { items: 2 },
          1024: { items: 3 }
        }
      };
    }
  }
}

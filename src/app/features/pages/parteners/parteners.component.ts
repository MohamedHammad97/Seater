import { Component } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-parteners',
  imports: [CarouselModule],
  templateUrl: './parteners.component.html',
  styleUrl: './parteners.component.css'
})
export class PartenersComponent {

  customOptions = {
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
  }
}
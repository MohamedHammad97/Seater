import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite.service';
import { FooterComponent } from "./core/layout/footer/footer.component";
import { NavbarComponent } from "./core/layout/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'seaterApp';
  _flowbiteService = inject(FlowbiteService)
  constructor() { }
  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
      console.log("Flowbite loaded",flowbite);
      
    });
  }
}

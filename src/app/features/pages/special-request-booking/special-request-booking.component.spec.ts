import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRequestBookingComponent } from './special-request-booking.component';

describe('SpecialRequestBookingComponent', () => {
  let component: SpecialRequestBookingComponent;
  let fixture: ComponentFixture<SpecialRequestBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialRequestBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialRequestBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

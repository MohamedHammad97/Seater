import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBookingComponent } from './school-booking.component';

describe('SchoolBookingComponent', () => {
  let component: SchoolBookingComponent;
  let fixture: ComponentFixture<SchoolBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

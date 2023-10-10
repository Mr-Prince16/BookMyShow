import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingConfigurationComponent } from './booking-configuration.component';

describe('BookingConfigurationComponent', () => {
  let component: BookingConfigurationComponent;
  let fixture: ComponentFixture<BookingConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

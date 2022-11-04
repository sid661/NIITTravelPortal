import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaypackagesComponent } from './holidaypackages.component';

describe('HolidaypackagesComponent', () => {
  let component: HolidaypackagesComponent;
  let fixture: ComponentFixture<HolidaypackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaypackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidaypackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

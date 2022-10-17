import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderregistercomponentComponent } from './serviceproviderregistercomponent.component';

describe('ServiceproviderregistercomponentComponent', () => {
  let component: ServiceproviderregistercomponentComponent;
  let fixture: ComponentFixture<ServiceproviderregistercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceproviderregistercomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceproviderregistercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

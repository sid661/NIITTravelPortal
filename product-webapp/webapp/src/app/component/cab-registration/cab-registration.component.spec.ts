import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabRegistrationComponent } from './cab-registration.component';

describe('CabRegistrationComponent', () => {
  let component: CabRegistrationComponent;
  let fixture: ComponentFixture<CabRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

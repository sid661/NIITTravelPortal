import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpformComponent } from './otpform.component';

describe('OtpformComponent', () => {
  let component: OtpformComponent;
  let fixture: ComponentFixture<OtpformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

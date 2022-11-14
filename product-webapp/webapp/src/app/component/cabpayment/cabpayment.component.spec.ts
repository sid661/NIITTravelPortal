import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabpaymentComponent } from './cabpayment.component';

describe('CabpaymentComponent', () => {
  let component: CabpaymentComponent;
  let fixture: ComponentFixture<CabpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

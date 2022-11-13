import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabreservationComponent } from './cabreservation.component';

describe('CabreservationComponent', () => {
  let component: CabreservationComponent;
  let fixture: ComponentFixture<CabreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabreservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

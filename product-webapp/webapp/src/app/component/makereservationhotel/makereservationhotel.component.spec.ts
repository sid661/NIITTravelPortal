import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakereservationhotelComponent } from './makereservationhotel.component';

describe('MakereservationhotelComponent', () => {
  let component: MakereservationhotelComponent;
  let fixture: ComponentFixture<MakereservationhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakereservationhotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakereservationhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

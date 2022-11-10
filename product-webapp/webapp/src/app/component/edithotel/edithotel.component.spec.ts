import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithotelComponent } from './edithotel.component';

describe('EdithotelComponent', () => {
  let component: EdithotelComponent;
  let fixture: ComponentFixture<EdithotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdithotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercomponentComponent } from './registercomponent.component';

describe('RegistercomponentComponent', () => {
  let component: RegistercomponentComponent;
  let fixture: ComponentFixture<RegistercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistercomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

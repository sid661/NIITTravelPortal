import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roller2Component } from './roller2.component';

describe('Roller2Component', () => {
  let component: Roller2Component;
  let fixture: ComponentFixture<Roller2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Roller2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roller2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

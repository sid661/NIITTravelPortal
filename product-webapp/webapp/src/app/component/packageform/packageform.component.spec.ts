import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageformComponent } from './packageform.component';

describe('PackageformComponent', () => {
  let component: PackageformComponent;
  let fixture: ComponentFixture<PackageformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

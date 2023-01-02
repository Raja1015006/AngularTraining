import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegStepperComponent } from './reg-stepper.component';

describe('RegStepperComponent', () => {
  let component: RegStepperComponent;
  let fixture: ComponentFixture<RegStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillanceNodeDetailsComponent } from './surveillance-node-details.component';

describe('SurveillanceNodeDetailsComponent', () => {
  let component: SurveillanceNodeDetailsComponent;
  let fixture: ComponentFixture<SurveillanceNodeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveillanceNodeDetailsComponent]
    });
    fixture = TestBed.createComponent(SurveillanceNodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

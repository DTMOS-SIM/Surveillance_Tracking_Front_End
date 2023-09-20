import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillanceGraphChartComponent } from './surveillance-graph-chart.component';

describe('SurveillanceGraphChartComponent', () => {
  let component: SurveillanceGraphChartComponent;
  let fixture: ComponentFixture<SurveillanceGraphChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveillanceGraphChartComponent]
    });
    fixture = TestBed.createComponent(SurveillanceGraphChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

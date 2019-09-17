import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePortfolioChartComponent } from './average-portfolio-chart.component';

describe('AveragePortfolioChartComponent', () => {
  let component: AveragePortfolioChartComponent;
  let fixture: ComponentFixture<AveragePortfolioChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveragePortfolioChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveragePortfolioChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleChartComponent } from './little-chart.component';

describe('LittleChartComponent', () => {
  let component: LittleChartComponent;
  let fixture: ComponentFixture<LittleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

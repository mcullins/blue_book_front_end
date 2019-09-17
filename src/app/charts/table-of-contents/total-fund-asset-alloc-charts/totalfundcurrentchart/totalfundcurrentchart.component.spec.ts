import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalfundcurrentchartComponent } from './totalfundcurrentchart.component';

describe('TotalfundcurrentchartComponent', () => {
  let component: TotalfundcurrentchartComponent;
  let fixture: ComponentFixture<TotalfundcurrentchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalfundcurrentchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalfundcurrentchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

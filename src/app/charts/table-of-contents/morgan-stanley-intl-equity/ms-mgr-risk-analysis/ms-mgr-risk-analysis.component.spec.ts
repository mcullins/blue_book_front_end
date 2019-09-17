import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsMgrRiskAnalysisComponent } from './ms-mgr-risk-analysis.component';

describe('MsMgrRiskAnalysisComponent', () => {
  let component: MsMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<MsMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

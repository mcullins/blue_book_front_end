import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMgrRiskAnalysisComponent } from './cv-mgr-risk-analysis.component';

describe('CvMgrRiskAnalysisComponent', () => {
  let component: CvMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<CvMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

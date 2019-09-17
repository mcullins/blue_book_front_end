import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpMgrRiskAnalysisComponent } from './cp-mgr-risk-analysis.component';

describe('CpMgrRiskAnalysisComponent', () => {
  let component: CpMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<CpMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

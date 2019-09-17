import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcpMgrRiskAnalysisComponent } from './ccp-mgr-risk-analysis.component';

describe('CcpMgrRiskAnalysisComponent', () => {
  let component: CcpMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<CcpMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcpMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcpMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

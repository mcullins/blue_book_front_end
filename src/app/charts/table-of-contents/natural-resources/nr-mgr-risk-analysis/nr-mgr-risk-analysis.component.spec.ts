import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrMgrRiskAnalysisComponent } from './nr-mgr-risk-analysis.component';

describe('NrMgrRiskAnalysisComponent', () => {
  let component: NrMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<NrMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipMgrRiskAnalysisComponent } from './cip-mgr-risk-analysis.component';

describe('CipMgrRiskAnalysisComponent', () => {
  let component: CipMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<CipMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

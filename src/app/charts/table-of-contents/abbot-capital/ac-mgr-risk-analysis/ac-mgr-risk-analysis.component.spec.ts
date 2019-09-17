import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcMgrRiskAnalysisComponent } from './ac-mgr-risk-analysis.component';

describe('AcMgrRiskAnalysisComponent', () => {
  let component: AcMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<AcMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

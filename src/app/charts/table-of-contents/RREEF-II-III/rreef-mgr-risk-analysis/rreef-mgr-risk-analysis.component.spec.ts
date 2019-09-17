import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RreefMgrRiskAnalysisComponent } from './rreef-mgr-risk-analysis.component';

describe('RreefMgrRiskAnalysisComponent', () => {
  let component: RreefMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<RreefMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RreefMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RreefMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

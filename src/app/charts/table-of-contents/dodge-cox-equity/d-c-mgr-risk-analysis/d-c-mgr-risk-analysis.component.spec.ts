import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCMgrRiskAnalysisComponent } from './d-c-mgr-risk-analysis.component';

describe('DCMgrRiskAnalysisComponent', () => {
  let component: DCMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<DCMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

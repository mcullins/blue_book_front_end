import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitMgrRiskAnalysisComponent } from './sit-mgr-risk-analysis.component';

describe('SitMgrRiskAnalysisComponent', () => {
  let component: SitMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<SitMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

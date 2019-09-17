import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsMgrRiskAnalysisComponent } from './ls-mgr-risk-analysis.component';

describe('LsMgrRiskAnalysisComponent', () => {
  let component: LsMgrRiskAnalysisComponent;
  let fixture: ComponentFixture<LsMgrRiskAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsMgrRiskAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsMgrRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

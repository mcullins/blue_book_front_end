import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsBasedAnalysisComponent } from './returns-based-analysis.component';

describe('ReturnsBasedAnalysisComponent', () => {
  let component: ReturnsBasedAnalysisComponent;
  let fixture: ComponentFixture<ReturnsBasedAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsBasedAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsBasedAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

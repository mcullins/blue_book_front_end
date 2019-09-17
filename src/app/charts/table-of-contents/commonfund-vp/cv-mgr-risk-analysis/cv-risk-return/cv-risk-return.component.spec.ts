import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvRiskReturnComponent } from './cv-risk-return.component';

describe('CvRiskReturnComponent', () => {
  let component: CvRiskReturnComponent;
  let fixture: ComponentFixture<CvRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

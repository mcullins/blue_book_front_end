import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCaptureRatioComponent } from './cv-capture-ratio.component';

describe('CvCaptureRatioComponent', () => {
  let component: CvCaptureRatioComponent;
  let fixture: ComponentFixture<CvCaptureRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCaptureRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCaptureRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

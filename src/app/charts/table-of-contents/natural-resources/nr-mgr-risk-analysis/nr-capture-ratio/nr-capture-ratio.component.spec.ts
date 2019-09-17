import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrCaptureRatioComponent } from './nr-capture-ratio.component';

describe('NrCaptureRatioComponent', () => {
  let component: NrCaptureRatioComponent;
  let fixture: ComponentFixture<NrCaptureRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrCaptureRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrCaptureRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

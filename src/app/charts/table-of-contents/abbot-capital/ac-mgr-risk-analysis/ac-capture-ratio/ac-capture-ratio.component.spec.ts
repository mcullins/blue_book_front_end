import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcCaptureRatioComponent } from './ac-capture-ratio.component';

describe('AcCaptureRatioComponent', () => {
  let component: AcCaptureRatioComponent;
  let fixture: ComponentFixture<AcCaptureRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcCaptureRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcCaptureRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

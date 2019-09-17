import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsEmergingCaptureRatioComponent } from './ms-emerging-capture-ratio.component';

describe('MsEmergingCaptureRatioComponent', () => {
  let component: MsEmergingCaptureRatioComponent;
  let fixture: ComponentFixture<MsEmergingCaptureRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsEmergingCaptureRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsEmergingCaptureRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipCaptureRatioComponent } from './cip-capture-ratio.component';

describe('CipCaptureRatioComponent', () => {
  let component: CipCaptureRatioComponent;
  let fixture: ComponentFixture<CipCaptureRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipCaptureRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipCaptureRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

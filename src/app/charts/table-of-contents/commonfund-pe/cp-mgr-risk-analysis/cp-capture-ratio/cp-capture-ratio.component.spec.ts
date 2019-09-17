import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpCaptureRatioComponent } from './cp-capture-ratio.component';

describe('CpCaptureRatioComponent', () => {
  let component: CpCaptureRatioComponent;
  let fixture: ComponentFixture<CpCaptureRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpCaptureRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpCaptureRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

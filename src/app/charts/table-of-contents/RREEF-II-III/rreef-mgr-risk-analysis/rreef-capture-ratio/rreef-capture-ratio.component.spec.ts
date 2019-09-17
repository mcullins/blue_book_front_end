import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RreefCaptureRatioComponent } from './rreef-capture-ratio.component';

describe('RreefCaptureRatioComponent', () => {
  let component: RreefCaptureRatioComponent;
  let fixture: ComponentFixture<RreefCaptureRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RreefCaptureRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RreefCaptureRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

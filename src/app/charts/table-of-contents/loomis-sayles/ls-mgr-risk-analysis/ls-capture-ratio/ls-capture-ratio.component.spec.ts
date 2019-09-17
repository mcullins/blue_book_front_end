import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsCaptureRatioComponent } from './ls-capture-ratio.component';

describe('LsCaptureRatioComponent', () => {
  let component: LsCaptureRatioComponent;
  let fixture: ComponentFixture<LsCaptureRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsCaptureRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsCaptureRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

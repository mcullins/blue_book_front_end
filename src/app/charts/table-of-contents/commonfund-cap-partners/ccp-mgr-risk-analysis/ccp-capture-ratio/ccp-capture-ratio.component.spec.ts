import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcpCaptureRatioComponent } from './ccp-capture-ratio.component';

describe('CcpCaptureRatioComponent', () => {
  let component: CcpCaptureRatioComponent;
  let fixture: ComponentFixture<CcpCaptureRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcpCaptureRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcpCaptureRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

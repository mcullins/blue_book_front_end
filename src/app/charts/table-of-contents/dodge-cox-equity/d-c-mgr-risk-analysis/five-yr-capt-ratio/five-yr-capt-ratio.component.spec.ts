import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveYrCaptRatioComponent } from './five-yr-capt-ratio.component';

describe('FiveYrCaptRatioComponent', () => {
  let component: FiveYrCaptRatioComponent;
  let fixture: ComponentFixture<FiveYrCaptRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveYrCaptRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveYrCaptRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsIntlFiveYrRatioComponent } from './ms-intl-five-yr-ratio.component';

describe('MsIntlFiveYrRatioComponent', () => {
  let component: MsIntlFiveYrRatioComponent;
  let fixture: ComponentFixture<MsIntlFiveYrRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsIntlFiveYrRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsIntlFiveYrRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsIntlFiveYrRiskReturnComponent } from './ms-intl-five-yr-risk-return.component';

describe('MsIntlFiveYrRiskReturnComponent', () => {
  let component: MsIntlFiveYrRiskReturnComponent;
  let fixture: ComponentFixture<MsIntlFiveYrRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsIntlFiveYrRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsIntlFiveYrRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

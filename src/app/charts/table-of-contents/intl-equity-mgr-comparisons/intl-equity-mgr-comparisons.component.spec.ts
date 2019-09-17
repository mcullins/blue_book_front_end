import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlEquityMgrComparisonsComponent } from './intl-equity-mgr-comparisons.component';

describe('IntlEquityMgrComparisonsComponent', () => {
  let component: IntlEquityMgrComparisonsComponent;
  let fixture: ComponentFixture<IntlEquityMgrComparisonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlEquityMgrComparisonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlEquityMgrComparisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

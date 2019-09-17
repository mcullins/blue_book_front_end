import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomEquityMgrComparisonsComponent } from './dom-equity-mgr-comparisons.component';

describe('DomEquityMgrComparisonsComponent', () => {
  let component: DomEquityMgrComparisonsComponent;
  let fixture: ComponentFixture<DomEquityMgrComparisonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomEquityMgrComparisonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomEquityMgrComparisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

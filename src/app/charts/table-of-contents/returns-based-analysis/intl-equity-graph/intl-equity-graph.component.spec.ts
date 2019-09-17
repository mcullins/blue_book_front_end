import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlEquityGraphComponent } from './intl-equity-graph.component';

describe('IntlEquityGraphComponent', () => {
  let component: IntlEquityGraphComponent;
  let fixture: ComponentFixture<IntlEquityGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlEquityGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlEquityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

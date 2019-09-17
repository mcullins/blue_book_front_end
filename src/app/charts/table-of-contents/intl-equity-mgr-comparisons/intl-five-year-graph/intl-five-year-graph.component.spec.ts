import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlFiveYearGraphComponent } from './intl-five-year-graph.component';

describe('IntlFiveYearGraphComponent', () => {
  let component: IntlFiveYearGraphComponent;
  let fixture: ComponentFixture<IntlFiveYearGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlFiveYearGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlFiveYearGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

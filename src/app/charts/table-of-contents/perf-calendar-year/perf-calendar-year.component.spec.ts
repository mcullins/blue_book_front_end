import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfCalendarYearComponent } from './perf-calendar-year.component';

describe('PerfCalendarYearComponent', () => {
  let component: PerfCalendarYearComponent;
  let fixture: ComponentFixture<PerfCalendarYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfCalendarYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfCalendarYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

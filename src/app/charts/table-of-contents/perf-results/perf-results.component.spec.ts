import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfResultsComponent } from './perf-results.component';

describe('PerfResultsComponent', () => {
  let component: PerfResultsComponent;
  let fixture: ComponentFixture<PerfResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveYearReturnGraphComponent } from './five-year-return-graph.component';

describe('FiveYearReturnGraphComponent', () => {
  let component: FiveYearReturnGraphComponent;
  let fixture: ComponentFixture<FiveYearReturnGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveYearReturnGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveYearReturnGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

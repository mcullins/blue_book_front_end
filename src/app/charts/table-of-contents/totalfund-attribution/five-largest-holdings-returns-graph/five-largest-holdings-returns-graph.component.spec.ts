import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveLargestHoldingsReturnsGraphComponent } from './five-largest-holdings-returns-graph.component';

describe('FiveLargestHoldingsReturnsGraphComponent', () => {
  let component: FiveLargestHoldingsReturnsGraphComponent;
  let fixture: ComponentFixture<FiveLargestHoldingsReturnsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveLargestHoldingsReturnsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveLargestHoldingsReturnsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

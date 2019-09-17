import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveHighestPriceChangeGraphComponent } from './five-highest-price-change-graph.component';

describe('FiveHighestPriceChangeGraphComponent', () => {
  let component: FiveHighestPriceChangeGraphComponent;
  let fixture: ComponentFixture<FiveHighestPriceChangeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveHighestPriceChangeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveHighestPriceChangeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

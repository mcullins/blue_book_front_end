import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveLowestPriceChangeGraphComponent } from './five-lowest-price-change-graph.component';

describe('FiveLowestPriceChangeGraphComponent', () => {
  let component: FiveLowestPriceChangeGraphComponent;
  let fixture: ComponentFixture<FiveLowestPriceChangeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveLowestPriceChangeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveLowestPriceChangeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

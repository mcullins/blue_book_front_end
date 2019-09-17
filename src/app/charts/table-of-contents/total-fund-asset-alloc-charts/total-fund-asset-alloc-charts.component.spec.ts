import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFundAssetAllocChartsComponent } from './total-fund-asset-alloc-charts.component';

describe('TotalFundAssetAllocChartsComponent', () => {
  let component: TotalFundAssetAllocChartsComponent;
  let fixture: ComponentFixture<TotalFundAssetAllocChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalFundAssetAllocChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalFundAssetAllocChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

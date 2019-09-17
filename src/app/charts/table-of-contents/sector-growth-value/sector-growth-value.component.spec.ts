import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorGrowthValueComponent } from './sector-growth-value.component';

describe('SectorGrowthValueComponent', () => {
  let component: SectorGrowthValueComponent;
  let fixture: ComponentFixture<SectorGrowthValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorGrowthValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorGrowthValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

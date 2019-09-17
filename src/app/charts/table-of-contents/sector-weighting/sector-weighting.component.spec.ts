import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorWeightingComponent } from './sector-weighting.component';

describe('SectorWeightingComponent', () => {
  let component: SectorWeightingComponent;
  let fixture: ComponentFixture<SectorWeightingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorWeightingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorWeightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

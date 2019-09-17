import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthValueGraphComponent } from './growth-value-graph.component';

describe('GrowthValueGraphComponent', () => {
  let component: GrowthValueGraphComponent;
  let fixture: ComponentFixture<GrowthValueGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthValueGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthValueGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

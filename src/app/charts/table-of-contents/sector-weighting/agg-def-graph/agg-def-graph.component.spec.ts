import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggDefGraphComponent } from './agg-def-graph.component';

describe('AggDefGraphComponent', () => {
  let component: AggDefGraphComponent;
  let fixture: ComponentFixture<AggDefGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggDefGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggDefGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

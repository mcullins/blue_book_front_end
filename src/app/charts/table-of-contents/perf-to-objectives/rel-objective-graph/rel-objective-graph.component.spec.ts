import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelObjectiveGraphComponent } from './rel-objective-graph.component';

describe('RelObjectiveGraphComponent', () => {
  let component: RelObjectiveGraphComponent;
  let fixture: ComponentFixture<RelObjectiveGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelObjectiveGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelObjectiveGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

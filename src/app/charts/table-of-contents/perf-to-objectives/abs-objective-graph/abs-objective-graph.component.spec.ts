import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsObjectiveGraphComponent } from './abs-objective-graph.component';

describe('AbsObjectiveGraphComponent', () => {
  let component: AbsObjectiveGraphComponent;
  let fixture: ComponentFixture<AbsObjectiveGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsObjectiveGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsObjectiveGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

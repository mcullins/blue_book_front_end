import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomThreeYrGraphComponent } from './dom-three-yr-graph.component';

describe('DomThreeYrGraphComponent', () => {
  let component: DomThreeYrGraphComponent;
  let fixture: ComponentFixture<DomThreeYrGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomThreeYrGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomThreeYrGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

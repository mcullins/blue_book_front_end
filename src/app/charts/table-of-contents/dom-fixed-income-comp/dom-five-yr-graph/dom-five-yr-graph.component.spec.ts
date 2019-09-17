import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomFiveYrGraphComponent } from './dom-five-yr-graph.component';

describe('DomFiveYrGraphComponent', () => {
  let component: DomFiveYrGraphComponent;
  let fixture: ComponentFixture<DomFiveYrGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomFiveYrGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomFiveYrGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

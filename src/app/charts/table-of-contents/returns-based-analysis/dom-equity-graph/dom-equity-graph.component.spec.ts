import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomEquityGraphComponent } from './dom-equity-graph.component';

describe('DomEquityGraphComponent', () => {
  let component: DomEquityGraphComponent;
  let fixture: ComponentFixture<DomEquityGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomEquityGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomEquityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

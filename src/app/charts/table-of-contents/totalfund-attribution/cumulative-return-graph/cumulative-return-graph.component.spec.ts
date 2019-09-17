import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeReturnGraphComponent } from './cumulative-return-graph.component';

describe('CumulativeReturnGraphComponent', () => {
  let component: CumulativeReturnGraphComponent;
  let fixture: ComponentFixture<CumulativeReturnGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativeReturnGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeReturnGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

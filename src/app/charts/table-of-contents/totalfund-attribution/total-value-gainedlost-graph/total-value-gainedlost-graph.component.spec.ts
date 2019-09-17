import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalValueGainedlostGraphComponent } from './total-value-gainedlost-graph.component';

describe('TotalValueGainedlostGraphComponent', () => {
  let component: TotalValueGainedlostGraphComponent;
  let fixture: ComponentFixture<TotalValueGainedlostGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalValueGainedlostGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalValueGainedlostGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

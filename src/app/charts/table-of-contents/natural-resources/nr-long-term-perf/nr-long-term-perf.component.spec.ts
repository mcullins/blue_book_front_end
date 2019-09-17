import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrLongTermPerfComponent } from './nr-long-term-perf.component';

describe('NrLongTermPerfComponent', () => {
  let component: NrLongTermPerfComponent;
  let fixture: ComponentFixture<NrLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

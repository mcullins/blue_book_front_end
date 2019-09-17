import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrAnnualPerfComponent } from './nr-annual-perf.component';

describe('NrAnnualPerfComponent', () => {
  let component: NrAnnualPerfComponent;
  let fixture: ComponentFixture<NrAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

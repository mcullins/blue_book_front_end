import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamAnnualPerfComponent } from './lam-annual-perf.component';

describe('LamAnnualPerfComponent', () => {
  let component: LamAnnualPerfComponent;
  let fixture: ComponentFixture<LamAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

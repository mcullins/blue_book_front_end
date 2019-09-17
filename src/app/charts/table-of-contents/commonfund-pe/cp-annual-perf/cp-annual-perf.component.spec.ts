import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpAnnualPerfComponent } from './cp-annual-perf.component';

describe('CpAnnualPerfComponent', () => {
  let component: CpAnnualPerfComponent;
  let fixture: ComponentFixture<CpAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

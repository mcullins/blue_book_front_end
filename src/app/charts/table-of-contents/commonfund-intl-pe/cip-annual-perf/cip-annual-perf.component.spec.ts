import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipAnnualPerfComponent } from './cip-annual-perf.component';

describe('CipAnnualPerfComponent', () => {
  let component: CipAnnualPerfComponent;
  let fixture: ComponentFixture<CipAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

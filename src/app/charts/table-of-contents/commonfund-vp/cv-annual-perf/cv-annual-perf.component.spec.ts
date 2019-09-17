import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAnnualPerfComponent } from './cv-annual-perf.component';

describe('CvAnnualPerfComponent', () => {
  let component: CvAnnualPerfComponent;
  let fixture: ComponentFixture<CvAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

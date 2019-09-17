import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsAnnualPerfComponent } from './ls-annual-perf.component';

describe('LsAnnualPerfComponent', () => {
  let component: LsAnnualPerfComponent;
  let fixture: ComponentFixture<LsAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

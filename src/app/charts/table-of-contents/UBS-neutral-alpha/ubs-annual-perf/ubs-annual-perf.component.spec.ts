import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbsAnnualPerfComponent } from './ubs-annual-perf.component';

describe('UbsAnnualPerfComponent', () => {
  let component: UbsAnnualPerfComponent;
  let fixture: ComponentFixture<UbsAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbsAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbsAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

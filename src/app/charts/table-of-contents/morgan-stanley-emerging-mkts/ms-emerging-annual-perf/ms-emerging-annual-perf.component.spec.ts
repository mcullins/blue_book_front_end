import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsEmergingAnnualPerfComponent } from './ms-emerging-annual-perf.component';

describe('MsEmergingAnnualPerfComponent', () => {
  let component: MsEmergingAnnualPerfComponent;
  let fixture: ComponentFixture<MsEmergingAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsEmergingAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsEmergingAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

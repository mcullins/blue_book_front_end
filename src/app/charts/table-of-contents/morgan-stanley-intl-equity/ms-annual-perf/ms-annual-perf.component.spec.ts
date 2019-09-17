import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAnnualPerfComponent } from './ms-annual-perf.component';

describe('MsAnnualPerfComponent', () => {
  let component: MsAnnualPerfComponent;
  let fixture: ComponentFixture<MsAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

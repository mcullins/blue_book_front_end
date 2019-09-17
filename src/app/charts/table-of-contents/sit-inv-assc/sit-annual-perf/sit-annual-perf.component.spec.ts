import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAnnualPerfComponent } from './sit-annual-perf.component';

describe('SitAnnualPerfComponent', () => {
  let component: SitAnnualPerfComponent;
  let fixture: ComponentFixture<SitAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

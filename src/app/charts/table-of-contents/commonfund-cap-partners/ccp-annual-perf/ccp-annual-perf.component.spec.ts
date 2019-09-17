import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcpAnnualPerfComponent } from './ccp-annual-perf.component';

describe('CcpAnnualPerfComponent', () => {
  let component: CcpAnnualPerfComponent;
  let fixture: ComponentFixture<CcpAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcpAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcpAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

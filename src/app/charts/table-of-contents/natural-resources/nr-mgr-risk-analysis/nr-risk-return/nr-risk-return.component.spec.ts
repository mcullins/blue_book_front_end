import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrRiskReturnComponent } from './nr-risk-return.component';

describe('NrRiskReturnComponent', () => {
  let component: NrRiskReturnComponent;
  let fixture: ComponentFixture<NrRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

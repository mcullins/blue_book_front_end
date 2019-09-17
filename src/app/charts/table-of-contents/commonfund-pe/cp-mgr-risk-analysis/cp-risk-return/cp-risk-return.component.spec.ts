import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpRiskReturnComponent } from './cp-risk-return.component';

describe('CpRiskReturnComponent', () => {
  let component: CpRiskReturnComponent;
  let fixture: ComponentFixture<CpRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

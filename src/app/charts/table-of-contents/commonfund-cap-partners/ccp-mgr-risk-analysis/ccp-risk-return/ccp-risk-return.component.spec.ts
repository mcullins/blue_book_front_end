import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcpRiskReturnComponent } from './ccp-risk-return.component';

describe('CcpRiskReturnComponent', () => {
  let component: CcpRiskReturnComponent;
  let fixture: ComponentFixture<CcpRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcpRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcpRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

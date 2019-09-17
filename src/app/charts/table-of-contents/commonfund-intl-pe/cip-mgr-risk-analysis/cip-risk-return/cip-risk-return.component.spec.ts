import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipRiskReturnComponent } from './cip-risk-return.component';

describe('CipRiskReturnComponent', () => {
  let component: CipRiskReturnComponent;
  let fixture: ComponentFixture<CipRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

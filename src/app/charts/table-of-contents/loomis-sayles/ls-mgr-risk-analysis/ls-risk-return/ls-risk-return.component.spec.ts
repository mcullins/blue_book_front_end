import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsRiskReturnComponent } from './ls-risk-return.component';

describe('LsRiskReturnComponent', () => {
  let component: LsRiskReturnComponent;
  let fixture: ComponentFixture<LsRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

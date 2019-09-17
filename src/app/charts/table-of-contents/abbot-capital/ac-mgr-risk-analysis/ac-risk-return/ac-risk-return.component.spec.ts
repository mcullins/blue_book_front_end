import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRiskReturnComponent } from './ac-risk-return.component';

describe('AcRiskReturnComponent', () => {
  let component: AcRiskReturnComponent;
  let fixture: ComponentFixture<AcRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

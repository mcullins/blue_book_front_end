import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsEmergingRiskReturnComponent } from './ms-emerging-risk-return.component';

describe('MsEmergingRiskReturnComponent', () => {
  let component: MsEmergingRiskReturnComponent;
  let fixture: ComponentFixture<MsEmergingRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsEmergingRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsEmergingRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

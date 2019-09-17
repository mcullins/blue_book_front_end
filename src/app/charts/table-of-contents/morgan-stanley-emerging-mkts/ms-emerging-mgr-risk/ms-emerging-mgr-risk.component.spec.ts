import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsEmergingMgrRiskComponent } from './ms-emerging-mgr-risk.component';

describe('MsEmergingMgrRiskComponent', () => {
  let component: MsEmergingMgrRiskComponent;
  let fixture: ComponentFixture<MsEmergingMgrRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsEmergingMgrRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsEmergingMgrRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

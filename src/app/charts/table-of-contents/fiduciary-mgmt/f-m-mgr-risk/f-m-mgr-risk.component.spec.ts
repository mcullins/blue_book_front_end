import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FMMgrRiskComponent } from './f-m-mgr-risk.component';

describe('FMMgrRiskComponent', () => {
  let component: FMMgrRiskComponent;
  let fixture: ComponentFixture<FMMgrRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FMMgrRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FMMgrRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

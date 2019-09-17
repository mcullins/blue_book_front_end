import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RreefRiskReturnComponent } from './rreef-risk-return.component';

describe('RreefRiskReturnComponent', () => {
  let component: RreefRiskReturnComponent;
  let fixture: ComponentFixture<RreefRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RreefRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RreefRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

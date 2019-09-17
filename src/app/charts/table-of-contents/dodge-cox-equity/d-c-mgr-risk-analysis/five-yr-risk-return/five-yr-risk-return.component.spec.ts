import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveYrRiskReturnComponent } from './five-yr-risk-return.component';

describe('FiveYrRiskReturnComponent', () => {
  let component: FiveYrRiskReturnComponent;
  let fixture: ComponentFixture<FiveYrRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveYrRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveYrRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

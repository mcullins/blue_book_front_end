import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFiveYrRiskReturnComponent } from './sit-five-yr-risk-return.component';

describe('SitFiveYrRiskReturnComponent', () => {
  let component: SitFiveYrRiskReturnComponent;
  let fixture: ComponentFixture<SitFiveYrRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitFiveYrRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFiveYrRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

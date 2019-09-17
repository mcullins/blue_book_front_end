import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FMThreeYrRiskReturnComponent } from './f-m-three-yr-risk-return.component';

describe('FMThreeYrRiskReturnComponent', () => {
  let component: FMThreeYrRiskReturnComponent;
  let fixture: ComponentFixture<FMThreeYrRiskReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FMThreeYrRiskReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FMThreeYrRiskReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

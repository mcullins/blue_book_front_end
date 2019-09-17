import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveYrAnnualizedComponent } from './five-yr-annualized.component';

describe('FiveYrAnnualizedComponent', () => {
  let component: FiveYrAnnualizedComponent;
  let fixture: ComponentFixture<FiveYrAnnualizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveYrAnnualizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveYrAnnualizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

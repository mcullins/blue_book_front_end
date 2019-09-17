import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFiveYrRatioComponent } from './sit-five-yr-ratio.component';

describe('SitFiveYrRatioComponent', () => {
  let component: SitFiveYrRatioComponent;
  let fixture: ComponentFixture<SitFiveYrRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitFiveYrRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFiveYrRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

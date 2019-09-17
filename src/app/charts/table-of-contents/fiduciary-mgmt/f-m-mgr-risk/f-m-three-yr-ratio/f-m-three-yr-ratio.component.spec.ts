import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FMThreeYrRatioComponent } from './f-m-three-yr-ratio.component';

describe('FMThreeYrRatioComponent', () => {
  let component: FMThreeYrRatioComponent;
  let fixture: ComponentFixture<FMThreeYrRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FMThreeYrRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FMThreeYrRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

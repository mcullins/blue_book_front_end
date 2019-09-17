import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveYrsEndingComponent } from './five-yrs-ending.component';

describe('FiveYrsEndingComponent', () => {
  let component: FiveYrsEndingComponent;
  let fixture: ComponentFixture<FiveYrsEndingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveYrsEndingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveYrsEndingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

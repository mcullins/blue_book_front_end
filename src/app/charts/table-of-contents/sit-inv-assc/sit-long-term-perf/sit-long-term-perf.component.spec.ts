import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitLongTermPerfComponent } from './sit-long-term-perf.component';

describe('SitLongTermPerfComponent', () => {
  let component: SitLongTermPerfComponent;
  let fixture: ComponentFixture<SitLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

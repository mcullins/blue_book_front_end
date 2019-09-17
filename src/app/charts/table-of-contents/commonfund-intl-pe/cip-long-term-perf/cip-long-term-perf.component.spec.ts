import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CipLongTermPerfComponent } from './cip-long-term-perf.component';

describe('CipLongTermPerfComponent', () => {
  let component: CipLongTermPerfComponent;
  let fixture: ComponentFixture<CipLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

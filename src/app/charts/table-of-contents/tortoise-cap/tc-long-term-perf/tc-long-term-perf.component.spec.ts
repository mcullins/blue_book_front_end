import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcLongTermPerfComponent } from './tc-long-term-perf.component';

describe('TcLongTermPerfComponent', () => {
  let component: TcLongTermPerfComponent;
  let fixture: ComponentFixture<TcLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

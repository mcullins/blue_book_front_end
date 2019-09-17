import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcpLongTermPerfComponent } from './ccp-long-term-perf.component';

describe('CcpLongTermPerfComponent', () => {
  let component: CcpLongTermPerfComponent;
  let fixture: ComponentFixture<CcpLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcpLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcpLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

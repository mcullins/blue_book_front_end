import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrPerfVsPeersComponent } from './mgr-perf-vs-peers.component';

describe('MgrPerfVsPeersComponent', () => {
  let component: MgrPerfVsPeersComponent;
  let fixture: ComponentFixture<MgrPerfVsPeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgrPerfVsPeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrPerfVsPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingteamComponent } from './consultingteam.component';

describe('ConsultingteamComponent', () => {
  let component: ConsultingteamComponent;
  let fixture: ComponentFixture<ConsultingteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultingteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

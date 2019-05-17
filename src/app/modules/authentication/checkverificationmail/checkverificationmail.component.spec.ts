import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckverificationmailComponent } from './checkverificationmail.component';

describe('CheckverificationmailComponent', () => {
  let component: CheckverificationmailComponent;
  let fixture: ComponentFixture<CheckverificationmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckverificationmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckverificationmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

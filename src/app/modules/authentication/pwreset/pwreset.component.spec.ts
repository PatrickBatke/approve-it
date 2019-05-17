import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PWResetComponent } from './pwreset.component';

describe('PWResetComponent', () => {
  let component: PWResetComponent;
  let fixture: ComponentFixture<PWResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PWResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PWResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

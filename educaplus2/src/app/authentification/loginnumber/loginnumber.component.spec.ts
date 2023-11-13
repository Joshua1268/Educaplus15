import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginnumberComponent } from './loginnumber.component';

describe('LoginnumberComponent', () => {
  let component: LoginnumberComponent;
  let fixture: ComponentFixture<LoginnumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginnumberComponent]
    });
    fixture = TestBed.createComponent(LoginnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

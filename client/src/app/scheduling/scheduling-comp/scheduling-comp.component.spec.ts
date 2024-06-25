import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingCompComponent } from './scheduling-comp.component';

describe('SchedulingCompComponent', () => {
  let component: SchedulingCompComponent;
  let fixture: ComponentFixture<SchedulingCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulingCompComponent]
    });
    fixture = TestBed.createComponent(SchedulingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

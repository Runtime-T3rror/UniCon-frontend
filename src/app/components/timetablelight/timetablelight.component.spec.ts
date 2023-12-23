import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetablelightComponent } from './timetablelight.component';

describe('TimetablelightComponent', () => {
  let component: TimetablelightComponent;
  let fixture: ComponentFixture<TimetablelightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimetablelightComponent]
    });
    fixture = TestBed.createComponent(TimetablelightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

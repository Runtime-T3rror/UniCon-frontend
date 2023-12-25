import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetabledarkComponent } from './timetabledark.component';

describe('TimetabledarkComponent', () => {
  let component: TimetabledarkComponent;
  let fixture: ComponentFixture<TimetabledarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimetabledarkComponent]
    });
    fixture = TestBed.createComponent(TimetabledarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

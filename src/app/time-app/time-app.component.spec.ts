import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAppComponent } from './time-app.component';

describe('TimeAppComponent', () => {
  let component: TimeAppComponent;
  let fixture: ComponentFixture<TimeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

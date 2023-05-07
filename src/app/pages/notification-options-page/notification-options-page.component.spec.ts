import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationOptionsPageComponent } from './notification-options-page.component';

describe('NotificationOptionsPageComponent', () => {
  let component: NotificationOptionsPageComponent;
  let fixture: ComponentFixture<NotificationOptionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationOptionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationOptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

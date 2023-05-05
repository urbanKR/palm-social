import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Authenticator01Component } from './authenticator01.component';

describe('Authenticator01Component', () => {
  let component: Authenticator01Component;
  let fixture: ComponentFixture<Authenticator01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Authenticator01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Authenticator01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignSettingsComponent } from './sign-settings.component';

describe('SignSettingsComponent', () => {
  let component: SignSettingsComponent;
  let fixture: ComponentFixture<SignSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

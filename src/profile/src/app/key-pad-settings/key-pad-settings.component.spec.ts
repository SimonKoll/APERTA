import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPadSettingsComponent } from './key-pad-settings.component';

describe('KeyPadSettingsComponent', () => {
  let component: KeyPadSettingsComponent;
  let fixture: ComponentFixture<KeyPadSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPadSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPadSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

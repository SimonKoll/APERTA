import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcSettingsComponent } from './nfc-settings.component';

describe('NfcSettingsComponent', () => {
  let component: NfcSettingsComponent;
  let fixture: ComponentFixture<NfcSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfcSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfcSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

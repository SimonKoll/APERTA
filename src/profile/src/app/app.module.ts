import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';

import { RouterModule, Routes } from '@angular/router';
import { NfcSettingsComponent } from './nfc-settings/nfc-settings.component';
import { KeyPadSettingsComponent } from './key-pad-settings/key-pad-settings.component';
import { SignSettingsComponent } from './sign-settings/sign-settings.component';
import {AddSignComponent} from "./add-sign/add-sign.component";
import { LoginComponent } from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from "@angular/material/icon";
import { NavbarComponent } from './navbar/navbar.component';
import { KeypadComponent } from './keypad/keypad.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'nfcSettings', component: NfcSettingsComponent},
  { path: 'keyPadSettings', component: KeyPadSettingsComponent},
  { path: 'signSettings', component: SignSettingsComponent},
  { path: 'addSign', component: AddSignComponent },
  { path: 'login', component: LoginComponent},
  { path: 'nav', component: NavbarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NfcSettingsComponent,
    KeyPadSettingsComponent,
    SignSettingsComponent,
    LoginComponent,
    NavbarComponent,
    KeypadComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    [RouterModule.forRoot(routes)],
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

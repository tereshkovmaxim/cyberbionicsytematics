import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth/auth.component';
import { AuthSignComponent } from './auth/auth-sign.component';
import { AuthLogComponent } from './auth/auth-log.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthSignComponent,
    AuthLogComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

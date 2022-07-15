import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { UiModule } from '../../../../libs/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NxModule.forRoot(),
    UiModule],
  bootstrap: [AppComponent],
})
export class AppModule { }

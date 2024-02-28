import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlanEventComponent } from './plan-event/plan-event.component';
import { SendEventComponent } from './send-event/send-event.component';
import { ViewEventComponent } from './view-event/view-event.component';

import { RiliProxyService } from './rili-proxy.service';

import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';

import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    PlanEventComponent,
    SendEventComponent,
    ViewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule
  ],
  providers: [RiliProxyService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }

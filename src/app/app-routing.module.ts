import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { PlanEventComponent } from './plan-event/plan-event.component';
import { SendEventComponent } from './send-event/send-event.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'planEvent', component: PlanEventComponent},
  { path: 'sendEvent', component: SendEventComponent},
  { path: 'rilievent/:id', component: ViewEventComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

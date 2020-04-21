import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './page-components/dashboard/dashboard.component';
import {JobDetailsPageComponent} from './page-components/job-details-page/job-details-page.component';
import {LandingComponent} from './page-components/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'welcome', component: LandingComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'job/:id', component: JobDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}

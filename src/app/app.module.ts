import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginDialogComponent, NavigationHeaderComponent} from './inner-components/navigation-header/navigation-header.component';
import { DashboardComponent } from './page-components/dashboard/dashboard.component';
import {AppRouters} from './app.routes';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { PieChartWrapperComponent } from './inner-components/pie-chart-wrapper/pie-chart-wrapper.component';
import { LinearGaugeWrapperComponent } from './inner-components/linear-gauge-wrapper/linear-gauge-wrapper.component';
import { GaugeWrapperComponent } from './inner-components/gauge-wrapper/gauge-wrapper.component';
import {DataService} from './services/data/data.service';
import { RecentJobsTableComponent } from './inner-components/recent-jobs-table/recent-jobs-table.component';
import {DatePipe} from '@angular/common';
import { JobDetailsPageComponent } from './page-components/job-details-page/job-details-page.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { LandingComponent } from './page-components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    DashboardComponent,
    PieChartWrapperComponent,
    LinearGaugeWrapperComponent,
    GaugeWrapperComponent,
    RecentJobsTableComponent,
    JobDetailsPageComponent,
    LoginDialogComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, // Custom module to import Angular Material components
    FlexLayoutModule,
    NgxChartsModule,
    NgxJsonViewerModule,
    AppRouters,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [DataService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

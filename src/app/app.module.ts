import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProcessUrlComponent } from './process-url/process-url.component';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRouters} from './app.routes';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { PieChartWrapperComponent } from './pie-chart-wrapper/pie-chart-wrapper.component';
import { LinearGaugeWrapperComponent } from './linear-gauge-wrapper/linear-gauge-wrapper.component';
import { GaugeWrapperComponent } from './gauge-wrapper/gauge-wrapper.component';
import {DataService} from './data/data.service';
import { RecentJobsTableComponent } from './recent-jobs-table/recent-jobs-table.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProcessUrlComponent,
    NavigationHeaderComponent,
    DashboardComponent,
    PieChartWrapperComponent,
    LinearGaugeWrapperComponent,
    GaugeWrapperComponent,
    RecentJobsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, // Custom module to import Angular Material components
    FlexLayoutModule,
    NgxChartsModule,
    AppRouters
  ],
  providers: [DataService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

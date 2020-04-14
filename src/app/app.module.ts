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

@NgModule({
  declarations: [
    AppComponent,
    ProcessUrlComponent,
    NavigationHeaderComponent,
    DashboardComponent,
    PieChartWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, // Custom module to import Angular Material components
    FlexLayoutModule,
    NgxChartsModule,
    AppRouters
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

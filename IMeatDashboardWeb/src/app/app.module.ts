import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CumulativeModule } from 'src/app/cumulative/cumulative.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { ScansComponent } from './modules/scans/scans.component';
import { MatCardModule } from '@angular/material/card';
import { PreferencesComponent } from './modules/preferences/preferences.component';
import { UserPrefferedDataComponent } from './modules/user-preffered-data/user-preffered-data.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScansComponent,
    PreferencesComponent,
    UserPrefferedDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    CumulativeModule,
    MatCardModule,
    HttpClientModule,
    HighchartsChartModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

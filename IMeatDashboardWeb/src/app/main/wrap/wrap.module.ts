import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapComponent } from './wrap.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CumulativeModule } from 'src/app/cumulative/cumulative.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [WrapComponent, DashboardComponent],
  imports: [CommonModule, RouterModule, CumulativeModule, MatSidenavModule],
})
export class WrapModule {}

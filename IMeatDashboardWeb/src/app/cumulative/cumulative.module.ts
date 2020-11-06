import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [HeaderComponent, NavbarComponent],
})
export class CumulativeModule {}

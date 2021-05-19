import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    SpinnerComponent,
    AlertComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NavbarComponent,
    DashboardComponent,
    SpinnerComponent,
    AlertComponent,
  ],
})
export class ComponentsModule {}

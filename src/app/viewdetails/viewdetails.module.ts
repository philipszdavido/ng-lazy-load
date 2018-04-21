import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewdetailsRoutingModule } from './viewdetails-routing.module';
import { ViewdetailsComponent } from './viewdetails.component';

@NgModule({
  imports: [
    CommonModule,
    ViewdetailsRoutingModule
  ],
  declarations: [ViewdetailsComponent]
})
export class ViewdetailsModule { }

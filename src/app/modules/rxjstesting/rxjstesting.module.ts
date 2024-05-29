import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjstestingRoutingModule } from './rxjstesting-routing.module';
import { RxjstestingComponent } from './rxjstesting.component';


@NgModule({
  declarations: [
    RxjstestingComponent
  ],
  imports: [
    CommonModule,
    RxjstestingRoutingModule
  ]
})
export class RxjstestingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjstestingComponent } from './rxjstesting.component';

const routes: Routes = [{ path: '', component: RxjstestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjstestingRoutingModule { }

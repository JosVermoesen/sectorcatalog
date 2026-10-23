import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslatePipe } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    TranslatePipe
  ]
})
export class AboutModule {}

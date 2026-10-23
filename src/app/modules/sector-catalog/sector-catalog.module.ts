import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SectorCatalogRoutingModule } from './sector-catalog-routing.module';
import { SectorCatalogComponent } from './sector-catalog.component';

import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { CatalogsCardListComponent } from './catalogs-card-list/catalogs-card-list.component';

@NgModule({
  declarations: [
    SectorCatalogComponent,
    CatalogsCardListComponent,
    CatalogDetailsComponent,
  ],
  imports: [
    CommonModule,
    TranslatePipe,
    ModalModule,
    FontAwesomeModule,
    SectorCatalogRoutingModule,
    ReactiveFormsModule,
    TabsModule
  ],
  providers: [BsModalRef],
})
export class SectorCatalogModule {}

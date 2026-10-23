import { Routes } from '@angular/router';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { SectorCatalogComponent } from './sector-catalog.component';

export const SECTOR_CATALOG_ROUTES: Routes = [
  { path: '', component: SectorCatalogComponent },
  { path: 'details', component: CatalogDetailsComponent },
];

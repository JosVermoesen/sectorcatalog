import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'sector-catalog',
    loadChildren: () =>
      import('./modules/sector-catalog/sector-catalog.routes').then(
        (m) => m.SECTOR_CATALOG_ROUTES
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'unsplash',
    loadChildren: () =>
      import('./modules/unsplash/unsplash.routes').then(
        (m) => m.UNSPLASH_ROUTES
      ),
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./modules/chart/chart.routes').then((m) => m.CHART_ROUTES),
  },
  {
    path: 'rxjstesting',
    loadChildren: () =>
      import('./modules/rxjstesting/rxjstesting.routes').then(
        (m) => m.RXJSTESTING_ROUTES
      ),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }

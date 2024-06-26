import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sector-catalog',
    loadChildren: () =>
      import('./modules/sector-catalog/sector-catalog.module').then(
        (m) => m.SectorCatalogModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'unsplash',
    loadChildren: () =>
      import('./modules/unsplash/unsplash.module').then(
        (m) => m.UnsplashModule
      ),
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./modules/chart/chart.module').then((m) => m.ChartModule),
  },
  { path: 'rxjstesting', loadChildren: () => import('./modules/rxjstesting/rxjstesting.module').then(m => m.RxjstestingModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }

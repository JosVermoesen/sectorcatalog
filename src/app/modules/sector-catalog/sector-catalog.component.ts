import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { createHttpObservable } from './_common/util';
import { map, shareReplay, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Company, Folder } from './_models/ICatalog';

@Component({
  selector: 'app-sector-catalog',
  templateUrl: './sector-catalog.component.html',
  styleUrls: ['./sector-catalog.component.scss'],
})
export class SectorCatalogComponent implements OnInit {
  apiError = false;

  federations$: Company[];
  insurers$: Company[];
  insurer$: Company[];
  allCatalogs$: Company[];

  whateverResult$: any;
  searchResult$: any;

  constructor() {}

  ngOnInit() {    
    const sectorCatalogUrl =
      'https://app.sectorcatalog.be/SectorCatalogBE/feed/v2/digestedcatalogItems?format=json&SecureGuid=' +
      environment.brokerKey;

    const http$ = createHttpObservable(sectorCatalogUrl);
    this.whateverResult$ = http$.pipe(
      tap(() => console.log('HTTP request executed')),
      map((res) => Object.values(res['Companies'])),
      shareReplay()
    );

    this.whateverResult$.subscribe(
      (res: Company[]) => {
        console.log(res.length);
        this.allCatalogs$ = res;
        this.federations$ = res.filter((res) => res.Origin == 'FEDERATION');
        this.insurers$ = res.filter((res) => res.Origin == 'COMPANY');
      },
      noop,
      () => {
        console.log('completed');
        console.log('number of all: ', this.allCatalogs$.length);
        console.log('number of federations: ', this.federations$.length);
        console.log('number of insurers: ', this.insurers$.length);
      }
    );
  }

  companyCheck(choosen: Company) {
    console.log(choosen);
    choosen.Folders.forEach((folder: Folder) => {
      folder.Items.forEach((item) => {
        // Category
        // 'IBPI-04' URL is web link

        // SubCategory
        // 'IBPSC-01' URL is weblink
        // 'IBPSC-05 URL is mp4 file
        // 'IBPSC-10' URL is gif file
        // 'IBPSC-11' URL is pdf file
        // 'IBPSC-12' URL is minisite
        // 'IBPSC-15' URL is gif file

        console.log(item);
        console.log(item.Url);
      });
    });
  }

  federationCheck(choosen: Company) {
    choosen.Folders.forEach((folder: Folder) => {
      folder.Items.forEach((item) => {
        // Category
        // 'IBPI-04' URL is web link

        // SubCategory
        // 'IBPSC-01' URL is weblink
        // 'IBPSC-05 URL is mp4 file
        // 'IBPSC-10' URL is gif file
        // 'IBPSC-12' URL is minisite
        console.log(item);
        console.log(item.Url);
      });
    });
  }
}

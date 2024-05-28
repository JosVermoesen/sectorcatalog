import { Component, OnInit } from '@angular/core';
import { noop } from 'rxjs';
import { createHttpObservable } from './_common/util';
import { map, shareReplay, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Company } from './_models/ICatalog';

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

  constructor() {}

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    const sectorCatalogUrl =
      'https://app.sectorcatalog.be/SectorCatalogBE/feed/v2/digestedcatalogItems?format=json&SecureGuid=' +
      environment.brokerKey;

    console.log('before http');
    const http$ = createHttpObservable(sectorCatalogUrl);
    console.log('after http');
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

  checkGenerali(choosen: Company) {
    console.log(choosen);
    this.whateverResult$.subscribe(
      (res: Company[]) => {
        this.insurer$ = res
          .filter(res => res.Folders[0].FolderDescription.NL == 'NL');
      },
      noop,
      () => {
        console.log('completed');
        console.log('found: ', this.insurer$.length);
        console.log(this.insurer$);
      }
    );
  }
}

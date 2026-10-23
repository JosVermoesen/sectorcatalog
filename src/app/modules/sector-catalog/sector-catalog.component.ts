import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { finalize, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Company, Folder } from './_models/ICatalog';

interface SectorCatalogResponse {
  Companies: Record<string, Company>;
}

@Component({
  selector: 'app-sector-catalog',
  templateUrl: './sector-catalog.component.html',
  styleUrls: ['./sector-catalog.component.scss'],
  imports: [TabsModule, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class SectorCatalogComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  readonly apiError = signal(false);
  readonly isLoading = signal(true);
  readonly allCatalogs = signal<Company[]>([]);
  readonly federations = computed(() =>
    this.allCatalogs().filter((company) => company.Origin === 'FEDERATION'),
  );
  readonly insurers = computed(() =>
    this.allCatalogs().filter((company) => company.Origin === 'COMPANY'),
  );

  ngOnInit() {
    const sectorCatalogUrl =
      'https://app.sectorcatalog.be/SectorCatalogBE/feed/v2/digestedcatalogItems?format=json&SecureGuid=' +
      environment.brokerKey;

    this.http
      .get<SectorCatalogResponse>(sectorCatalogUrl)
      .pipe(
        map((response) => Object.values(response?.Companies ?? {})),
        finalize(() => this.isLoading.set(false)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (companies) => {
          this.apiError.set(false);
          this.allCatalogs.set(companies);
          console.log('number of all:', companies.length);
          console.log(
            'number of federations:',
            companies.filter((company) => company.Origin === 'FEDERATION')
              .length,
          );
          console.log(
            'number of insurers:',
            companies.filter((company) => company.Origin === 'COMPANY').length,
          );
        },
        error: () => {
          this.apiError.set(true);
          this.allCatalogs.set([]);
        },
      });
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

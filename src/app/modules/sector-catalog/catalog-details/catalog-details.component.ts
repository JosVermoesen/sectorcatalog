import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ICatalog } from "../_models/ICatalog";

@Component({
    selector: 'app-catalog-details',
    templateUrl: './catalog-details.component.html',
    imports: [ReactiveFormsModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class CatalogDetailsComponent implements OnInit {
  title = '';
  cat: ICatalog | null = null;

  public onSelected: Subject<boolean> = new Subject<boolean>();

  catForm: UntypedFormGroup | null = null;

  constructor(public bsModalRef: BsModalRef, private fb: UntypedFormBuilder) {}

  ngOnInit() {
    const catalog = (this.cat ?? {}) as any;

    this.catForm = this.fb.group({
      brokerComments: [catalog.BrokerComments],
      brokerCompanyId: [catalog.BrokerCompanyId],
      calculatedUrl: [catalog.CalculatedUrl],
      catalogItemGuid: [catalog.CatalogItemGuid, Validators.required],
      categoryDescription: [catalog.CategoryDescription],
      categoryFR: [catalog.CategoryFR],
      categoryKey: [catalog.CategoryKey],
      companyCode: [catalog.CompanyCode],
      companyName: [catalog.CompanyName],
      companyNameFR: [catalog.CompanyNameFR],
      deleted: [catalog.Deleted],
      description: [catalog.Description],
      descriptionFR: [catalog.DescriptionFR],
      descriptionLongFR: [catalog.DescriptionLongFR],
      descriptionLongNL: [catalog.DescriptionLongNL],
      descriptionNL: [catalog.DescriptionNL, Validators.required],
      displayModeDescription: [catalog.DisplayModeDescription],
      displayModeKey: [catalog.DisplayModeKey],
      friendlySizeKey: [catalog.FriendlySizeKey],
      guarenteeKey: [catalog.GuarenteeKey],
      height: [catalog.Height],
      itemValidity: [catalog.ItemValidity],
      itemVisibleFrom: [catalog.ItemVisibleFrom],
      itemVisibleUntil: [catalog.ItemVisibleUntil],
      language: [catalog.Language],
      productDomainCodeDescriptionFR: [catalog.ProductDomainCodeDescriptionFR],
      productDomainCodeDescriptionNL: [catalog.ProductDomainCodeDescriptionNL],
      productDomainCodeKey: [catalog.ProductDomainCodeKey],
      productGuid: [catalog.ProductGuid],
      productName: [catalog.ProductName],
      productValidity: [catalog.ProductValidity],
      productVisibleFrom: [catalog.ProductVisibleFrom],
      productVisibleUntil: [catalog.ProductVisibleUntil],
      reference: [catalog.Reference],
      secureGUID: [catalog.SecureGUID],
      subCategoryDescription: [catalog.SubCategoryDescription],
      subCategoryFR: [catalog.SubCategoryFR],
      subCategoryKey: [catalog.SubCategoryKey],
      systemIdentifier: [catalog.SystemIdentifier],
      targetKey: [catalog.TargetKey],
      title: [catalog.Title],
      url: [catalog.Url, Validators.required],
      version: [catalog.Version],
      width: [catalog.Width],
      origin: [catalog.origin],
    });

    this.catForm.valueChanges.subscribe(console.log);
  }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LanguageComponent } from './language/language.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    imports: [RouterLink, TranslatePipe, FontAwesomeModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class NavbarComponent implements OnInit {
  bsModalRef: BsModalRef;

  faBars = faBars;
  faGlobe = faGlobe;

  constructor(
    private modalService: BsModalService,
    private ts: TranslateService
  ) {}

  ngOnInit() {}

  onLanguageModal() {
    const lblTitle = this.ts.instant('NAVBAR.LanguageModalTitle');
    const lblCloseBtnName = this.ts.instant(
      'NAVBAR.LanguageModalCloseBtnName'
    );

    const initialState = {
      title: lblTitle
    };
    this.bsModalRef = this.modalService.show(LanguageComponent, {
      initialState
    });
    this.bsModalRef.content.onSelected.subscribe(() => {
      // when closed do something eventualy
    });

    this.bsModalRef.content.closeBtnName = lblCloseBtnName;
  }
}

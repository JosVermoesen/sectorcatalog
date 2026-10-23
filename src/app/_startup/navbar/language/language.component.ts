import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { LanguageService } from '../../language.service';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LanguageComponent implements OnInit {
  title = '';
  closeBtnName = '';

  languages: Array<{ text: string; subtext: string; value: string; img: string; enabled: boolean }> = [];
  selected = '';

  public onSelected: Subject<boolean> = new Subject<boolean>();

  constructor(
    public bsModalRef: BsModalRef,
    private languageService: LanguageService
  ) {}

  public ngOnInit(): void {
    this.languages = this.languageService.getLanguages();
    this.selected = this.languageService.selected;
  }

  select(lng: string) {
    this.languageService.setLanguage(lng);
    // this.saveSettings();
    // this.popoverCtrl.dismiss();

    this.onSelected.next(true);
    this.bsModalRef.hide();
  }
}

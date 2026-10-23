import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './_startup/language.service';
import { FooterComponent } from './_startup/footer/footer.component';
import { NavbarComponent } from './_startup/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class AppComponent implements OnInit{
  title = 'api-demos';
  constructor(private ls: LanguageService) {}

  ngOnInit() {
    this.ls.setInitialAppLanguage();
  }
}

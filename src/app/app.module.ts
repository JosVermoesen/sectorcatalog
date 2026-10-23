import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideTranslateService, TranslatePipe } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LanguageService } from './_startup/language.service';
import { LanguageComponent } from './_startup/navbar/language/language.component';
import { FooterComponent } from './_startup/footer/footer.component';
import { NavbarComponent } from './_startup/navbar/navbar.component';

@NgModule({ declarations: [
        AppComponent,
        LanguageComponent,
        NavbarComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        CarouselModule,
        TranslatePipe,
        ModalModule,
        FontAwesomeModule,
        AppRoutingModule], providers: [
        LanguageService,
        BsModalRef,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        provideTranslateService({
            loader: provideTranslateHttpLoader({ prefix: 'assets/i18n/', suffix: '.json' })
        }),
        provideHttpClient(withXhr(), withInterceptorsFromDi())
    ] })
export class AppModule { }

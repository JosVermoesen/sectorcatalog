import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CarouselModule, CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CarouselModule, TranslatePipe, RouterLink],
    providers: [
        {
            provide: CarouselConfig,
            useValue: { interval: 2000, noPause: true, showIndicators: true },
        },
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}

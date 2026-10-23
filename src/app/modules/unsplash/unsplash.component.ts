import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-unsplash',
    templateUrl: './unsplash.component.html',
    styleUrls: ['./unsplash.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class UnsplashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

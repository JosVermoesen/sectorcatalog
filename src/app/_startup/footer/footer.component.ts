import { Component, ChangeDetectionStrategy } from '@angular/core';

// import { version } from './../../../../package.json';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class FooterComponent {
  // version: string = version;
  year = new Date().getFullYear();
}

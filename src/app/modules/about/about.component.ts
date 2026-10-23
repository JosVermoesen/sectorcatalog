import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    imports: [TranslatePipe],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [TranslatePipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class HomeComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  activeSlideIndex = 0;

  readonly slides = [
    {
      imageKey: 'HOME.Carousel-Image1',
      altKey: 'HOME.Carousel-Alt1',
      labelKey: 'HOME.Carousel-Label1',
      infoKey: 'HOME.Carousel-Info1',
      linkKey: 'HOME.Carousel-Link1',
      buttonKey: 'HOME.Carousel-Button1',
      buttonClass: 'btn btn-primary btn-lg',
    },
    {
      imageKey: 'HOME.Carousel-Image2',
      altKey: 'HOME.Carousel-Alt2',
      labelKey: 'HOME.Carousel-Label2',
      infoKey: 'HOME.Carousel-Info2',
      linkKey: 'HOME.Carousel-Link2',
      buttonKey: 'HOME.Carousel-Button2',
      buttonClass: 'btn btn-success btn-lg',
    },
    {
      imageKey: 'HOME.Carousel-Image3',
      altKey: 'HOME.Carousel-Alt3',
      labelKey: 'HOME.Carousel-Label3',
      infoKey: 'HOME.Carousel-Info3',
      linkKey: 'HOME.Carousel-Link3',
      buttonKey: 'HOME.Carousel-Button3',
      buttonClass: 'btn btn-danger btn-lg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    interval(2000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.nextSlide());
  }

  previousSlide(): void {
    this.activeSlideIndex =
      (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.activeSlideIndex = index;
  }
}

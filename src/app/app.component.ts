import { Component } from '@angular/core';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
@Component({
  selector: 'app-root',
  imports: [SlideshowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-slideshow-example';
  slides = [
    {
      imageUrl: 'https://picsum.photos/id/1018/1000/500',
      title: 'Slide 1',
      description: 'This is the first slide'
    },
    {
      imageUrl: 'https://picsum.photos/id/1015/1000/500',
      title: 'Slide 2',
      description: 'This is the second slide'
    },
    {
      imageUrl: 'https://picsum.photos/id/1019/1000/500',
      title: 'Slide 3',
      description: 'This is the third slide'
    }
  ]
}

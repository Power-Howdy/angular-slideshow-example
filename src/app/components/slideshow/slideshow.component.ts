import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
@Component({
    selector: "app-slideshow",
    imports: [CommonModule, MatButtonModule, MatIconModule],
    templateUrl: "./slideshow.component.html",
    styleUrl: "./slideshow.component.scss",
})
export class SlideshowComponent {
    @Input() slides: Array<{
        imageUrl: string;
        title?: string;
        description?: string;
    }> = [];

    currentIndex = 0;

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }

    prevSlide() {
        this.currentIndex =
            this.currentIndex === 0
                ? this.slides.length - 1
                : this.currentIndex - 1;
    }

    goToSlide(index: number) {
        this.currentIndex = index;
    }
}

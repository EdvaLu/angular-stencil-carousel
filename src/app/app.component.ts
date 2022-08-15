import { Component } from '@angular/core';
import CarouselData from '../mock/data.js';

interface CarouselItem {
    name?: string;
    image: string;
    altText?: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    data: CarouselItem[] = CarouselData;
    interval: number = 3000;

    onClickImage(): void {
        console.log("Image was clicked");
    }

    onClickNextPrevButton($event): void {
        console.log($event.detail);
    }

    onClickDotButton($event): void {
        console.log($event.detail);
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    showPolitics: boolean;
    showAboutUs: boolean;

    constructor() { }

    ngOnInit(): void {
    }


    togglePolitics() {
        this.showPolitics = !this.showPolitics;
    }

    toggleAboutUs() {
        this.showAboutUs = !this.showAboutUs;
    }
}

import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
    @ViewChild('hamburguerMenu') hamburguerMenu: ElementRef;
    @ViewChild('menuIcon') menuIcon: ElementRef;
    @ViewChild('closeIcon') closeIcon: ElementRef;


    constructor(private renderer2: Renderer2) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.openMenu();
        this.closeMenu();
    }

    openMenu(): void {
        const asHamburguerMenu = this.hamburguerMenu.nativeElement;
        const asMenuIcon = this.menuIcon.nativeElement;
        this.renderer2.listen(asMenuIcon, 'click', (evt) => {
            this.renderer2.addClass(document.body, 'noscroll');
            this.renderer2.addClass(asHamburguerMenu, 'show');
        });
    }

    closeMenu(): void {
        const asHamburguerMenu = this.hamburguerMenu.nativeElement;
        const asCloseIcon = this.closeIcon.nativeElement;
        this.renderer2.listen(asCloseIcon, 'click', (evt) => {
            this.renderer2.removeClass(document.body, 'noscroll');
            this.renderer2.removeClass(asHamburguerMenu, 'show');
        });
    }

}

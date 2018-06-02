import { Component } from '@angular/core';

@Component({
    selector: 'ngbd-modal',
    templateUrl: './modal.component.html',
    inputs: ['title', 'body']
})

export class NgbdModalContent {
    private title: string;
    private body: string;

    constructor(public activeModal) {}
}

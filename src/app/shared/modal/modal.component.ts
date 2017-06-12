import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'ngbd-modal',
    templateUrl: './modal.component.html',
    inputs: ['title', 'body']
})

export class NgbdModalContent {
    private title: string;
    private body: string;

    constructor(public activeModal: NgbActiveModal) {}
}
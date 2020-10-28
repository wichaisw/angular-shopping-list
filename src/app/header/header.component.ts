import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent {
    selectedSection: string = 'recipe';
    @Output() sectionSelected = new EventEmitter<string>();

    // onSectionSelect(e: MouseEvent) {
    //     this.sectionSelected.emit((<HTMLInputElement>e.target).innerText);
    // }
    onSectionSelect(section: string) {
        this.sectionSelected.emit(section);
    }
}
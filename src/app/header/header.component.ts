import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent {
    selectedSection: string = 'recipes';
    @Output() sectionSelected = new EventEmitter<string>();

    // onSelectRecipes(e) {
    //     console.log(e.target.value);
    // }

    // onSelectShoppingList(e) {
    //     console.log(e.target.value);
    // }

    onSectionSelect(e: MouseEvent) {
        this.sectionSelected.emit((<HTMLInputElement>e.target).innerText);
    }
}
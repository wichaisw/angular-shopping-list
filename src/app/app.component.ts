import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-shopping-list';
  selectedSection: string = 'recipe';

  onNavigate(section: string) {
    console.log(section)
    this.selectedSection = section;
  }
}

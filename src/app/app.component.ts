import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { HomeComponent } from "./home/home.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, MenuTitleComponent, HomeComponent, MenuBarComponent]
})
export class AppComponent {
  title = 'angular-blog';
}

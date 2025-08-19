import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,SettingsComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular-routing';
}

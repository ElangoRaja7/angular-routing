import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,SettingsComponent,RouterLink,AccountComponent,ProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular-routing';
  routes=[{
    linkName:'account',url:'account'
  },
  {
    linkName:'profile',url:'profile'
  }];
}

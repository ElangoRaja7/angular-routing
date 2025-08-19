import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'settings', component:SettingsComponent},
    {path:'account',component:AccountComponent},
    {path:'profile',component:ProfileComponent},
     {path:'**', component:ErrorComponent}
];

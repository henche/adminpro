import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: PagenotfoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true});

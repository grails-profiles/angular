import {Routes} from '@angular/router';
import {IndexComponent} from "./index/index";

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
];


import { Routes } from '@angular/router';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';
import { ShoeCreateDetailComponent } from './shoe-create-detail/shoe-create-detail.component';

export const routes: Routes = [
    {path: 'shoes/:id', component: ShoeDetailComponent},
    {path: 'shoes/create', component: ShoeCreateDetailComponent}
];

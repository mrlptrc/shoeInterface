import { Routes } from '@angular/router';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';

export const routes: Routes = [
    {path: 'shoes/:id', component: ShoeDetailComponent},
];

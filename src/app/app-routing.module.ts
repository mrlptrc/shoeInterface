import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoeComponent } from '../app/shoe/shoe.component';
import { SearchComponentComponent } from './search-component/search-component.component';

const routes: Routes = [
  { path: 'shoes', component: ShoeComponent },
  { path : 'search', component : SearchComponentComponent },
  { path: '', redirectTo: '/shoes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

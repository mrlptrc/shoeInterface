import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoeComponent } from '../app/shoe/shoe.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';

const routes: Routes = [
  { path: 'shoes', component: ShoeComponent },
  { path : 'search', component : SearchComponentComponent },
  { path: 'shoes/:id', component: ShoeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

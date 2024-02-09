import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoeComponent } from '../app/shoe/shoe.component';

const routes: Routes = [
  { path: 'shoes', component: ShoeComponent },
  { path: '', redirectTo: '/shoes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

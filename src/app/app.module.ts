import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShoeComponent } from './shoe/shoe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoeCreateComponent } from './shoe-create/shoe-create.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ShoeUpdateComponent } from './shoe-update/shoe-update.component';
import { ShoeDeleteComponent } from './shoe-delete/shoe-delete.component';

@NgModule({
  declarations: [AppComponent, ShoeComponent, ShoeCreateComponent, ShoeUpdateComponent, ShoeDeleteComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})

export class AppModule {}

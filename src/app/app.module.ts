import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ShoeComponent } from './shoe/shoe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoeCreateComponent } from './shoe-create/shoe-create.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ShoeUpdateComponent } from './shoe-update/shoe-update.component';
import { ShoeDeleteComponent } from './shoe-delete/shoe-delete.component';
import { ShoePopupComponent } from './shoe-popup/shoe-popup.component';
import { SearchComponentComponent } from './search-component/search-component.component';

@NgModule({
  declarations: [AppComponent, ShoeComponent, ShoeCreateComponent, ShoeUpdateComponent, ShoeDeleteComponent, ShoePopupComponent, SearchComponentComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule, AppRoutingModule, CommonModule],
  bootstrap: [AppComponent],
})

export class AppModule {}

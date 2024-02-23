import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShoePopupComponent } from './shoe-popup/shoe-popup.component';
import { ShoeDeletePopupComponent } from './shoe-delete-popup/shoe-delete-popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) { }

  openPopup(msg: string, response: any) {
    this.dialog.open(ShoePopupComponent, {
      data: { message: msg, response: response },
      hasBackdrop: false
    });
  }

  openDeletePopup(msg: string, shoeId: string, event: MouseEvent){
    event.stopPropagation();
    this.dialog.open(ShoeDeletePopupComponent, {
      data: {message: msg, shoeId: shoeId}
    });
  }
}
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShoeService } from '../shoe.service';
import { ShoeDTO } from '../shoe-dto.model';
import { PopupService } from '../popup.service';
import { ShoeDeleteComponent } from '../shoe-delete/shoe-delete.component';

@Component({
  selector: 'app-shoe-delete-popup',
  templateUrl: './shoe-delete-popup.component.html',
  styleUrl: './shoe-delete-popup.component.css'
})
export class ShoeDeletePopupComponent {
  shoe: ShoeDTO = { id: '', brand: '', model: '', price: 0 };
  constructor(
    private shoeService: ShoeService,
    private popupService: PopupService,
    @Inject(MAT_DIALOG_DATA) public data: {message: string, shoeId: string},
    private dialogRef: MatDialogRef<ShoeDeletePopupComponent>
  ) { }
  isOpen: boolean = true;
  

  close() {
    this.dialogRef.close();
  }

  deleteButton(){
    const shoeIdToUpdate = this.data.shoeId;
    if(shoeIdToUpdate){
      this.shoeService.deleteShoe(shoeIdToUpdate).subscribe({
        next: () => {
          this.dialogRef.close();
          this.popupService.openPopup('Shoe deleted succesfully', '');
        },
        error: (error) => {
          this.dialogRef.close();
          this.popupService.openPopup('An error ocurred trying deleting a shoe.', error);
        },
      })
    }
  }
}


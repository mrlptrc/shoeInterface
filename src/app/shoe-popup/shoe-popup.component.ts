import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shoe-popup',
  templateUrl: './shoe-popup.component.html',
  styleUrls: ['./shoe-popup.component.css'],
})
export class ShoePopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ShoePopupComponent>
  ) {}
    isOpen: boolean = true;
    
  close() {
    this.dialogRef.close();
  }
}

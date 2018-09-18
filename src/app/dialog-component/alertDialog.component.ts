import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    template: `
        <h1 mat-dialog-title>Message</h1>
        <div mat-dialog-content>
            <p>This is Alert Dialog</p>
        </div>
        <div mat-dialog-actions>
            <button mat-button (click)="close()">Close</button>
        </div>
  `
})
export class AlertDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<AlertDialogComponent>) { }

    close(): void {
        this.dialogRef.close();
    }
}
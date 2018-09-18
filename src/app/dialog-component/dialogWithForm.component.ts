import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
    firstName: string;
    lastName: string;
}

@Component({
    template: `
    <h1 mat-dialog-title>
        Fill Basic Details
    </h1>
    <div mat-dialog-content>
        <mat-form-field>
            <input placeholder="First Name" matInput [(ngModel)]="data.firstName">
        </mat-form-field><br>
        <mat-form-field>
            <input placeholder="Last Name" matInput [(ngModel)]="data.lastName">
        </mat-form-field>
    </div>
    <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="data">Submit</button>
        <button mat-button (click)="onNoClick()">Close</button>
    </div>
  `
})
export class DialogWithFormComponent {

    firstName: string = '';
    lastName: string = '';

    constructor(
        public dialogRef: MatDialogRef<DialogWithFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


    onNoClick(): void {
        this.dialogRef.close();
    }
}
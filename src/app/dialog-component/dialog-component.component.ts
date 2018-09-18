import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { SimpleDialogComponent } from './simpleDialog.component';
import { DialogWithFormComponent } from './dialogWithForm.component';
import { AlertDialogComponent } from './alertDialog.component';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {

  firstName: string;
  lastName: string;
  dialogConfig: MatDialogConfig;
  simpleDialog: MatDialogRef<SimpleDialogComponent>;
  dialogWithForm: MatDialogRef<DialogWithFormComponent>;
  alertDialog: MatDialogRef<AlertDialogComponent>;

  constructor(private dialogModel: MatDialog) { }

  ngOnInit() {
  }

  dialog() {
    this.simpleDialog = this.dialogModel.open(SimpleDialogComponent);
  }

  dialogForm() {
    const dialogWithForm = this.dialogModel.open(DialogWithFormComponent, {
      width: '250px',
      data: { firstName: this.firstName, lastName: this.lastName }
    });

    dialogWithForm.afterClosed().subscribe(result => {
      console.log('You have closed dialog');
      if (result) {
        this.firstName = result.firstName;
        this.lastName = result.lastName;
      }
    });
  }

  dialogAlert() {
    this.alertDialog = this.dialogModel.open(AlertDialogComponent, {
      role: 'alertdialog'
    });
  }

}


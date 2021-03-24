import { Injectable } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { AlertComponent } from './alert/alert.component';

@Injectable()
export class DialogService {

  dialogRefEvents: any;

  constructor(private dialog: MatDialog) { }

  public alert(message: string, title?: string, callbackOk?: any, spinner?: boolean, buttonSuccess?: string, buttonCancel?: string): MatDialogRef<Object, Object> {
    const dialogRef = this.dialog.open(AlertComponent, this.getDialogConfig(message, title, spinner, buttonSuccess, buttonCancel));
    this.dialogRefEvents = dialogRef;
    if (!!callbackOk) {
      dialogRef.afterClosed().subscribe(callbackOk);
    }
    return dialogRef;
  }

  public dialogRef() {
    return this.dialogRefEvents;
  }

  private getDialogConfig(message: string, title?: string, spinner?: boolean, buttonSuccess?: string, buttonCancel?: string, textareaParamn?: TextareaParams): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const newButtonSuccess = !!buttonSuccess ? buttonSuccess : 'Ok';
    const newButtonCancel = !!buttonCancel ? buttonCancel : 'Cancelar';
    let newTextareaParamns = {
      rows: !!textareaParamn && !!textareaParamn.rows ? textareaParamn.rows : '10',
      cols: !!textareaParamn && !!textareaParamn.cols ? textareaParamn.cols : '50',
      maxlength: !!textareaParamn && !!textareaParamn.maxlength ? textareaParamn.maxlength : '4000',
    }
    dialogConfig.data = {
      title: title,
      text: message,
      buttonSuccess: newButtonSuccess,
      buttonCancel: newButtonCancel,
      textarea: newTextareaParamns
    };
    if (!!spinner) {
      dialogConfig.data.spinner = true;
    }
    return dialogConfig;
  }
}

export class TextareaParams {
  rows!: string;
  cols!: string;
  maxlength!: string;
}

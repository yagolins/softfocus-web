import { Component, Inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

  loadingPercent = 0;

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.loadingProgress(1000)
      .subscribe(i => (this.loadingPercent = i));
  }

  closeDialog() {
    this.dialogRef.close('ok');
  }

  loadingProgress(speed: number) {
    return interval(speed)
      .pipe(
        map(i => i * 10),
        takeWhile(i => i <= 100)
      );
  }

}

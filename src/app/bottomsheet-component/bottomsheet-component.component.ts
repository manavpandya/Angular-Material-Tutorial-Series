import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottomsheet-component',
  templateUrl: './bottomsheet-component.component.html',
  styleUrls: ['./bottomsheet-component.component.css']
})
export class BottomsheetComponentComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  openBottomSheet() {
    this.bottomSheet.open(BottomsheetExampleComponentComponent);
  }
}

@Component({
  selector: 'app-bottomsheet-window-component',
  templateUrl: './bottomsheet-window-component.component.html',
})
export class BottomsheetExampleComponentComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomsheetExampleComponentComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

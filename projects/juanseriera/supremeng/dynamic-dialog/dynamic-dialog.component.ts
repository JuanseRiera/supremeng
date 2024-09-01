import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { SupDialogData } from './dynamic-dialog-config';
import {
  SupDialogContent,
  SupDialogHeader,
  SupDialogFooter,
} from './dynamic-dialog-directives';

@Component({
  selector: 'sup-dynamic-dialog',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    SupDialogHeader,
    SupDialogContent,
    SupDialogFooter,
  ],
  templateUrl: './dynamic-dialog.component.html',
  styles: `
    @import '../node_modules/@angular/cdk/overlay-prebuilt.css';
    .supremeng__dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    .supremeng__dialog-header__close-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
    }

    .supremeng__dialog-header__close-icon:hover {
        background-color: #f1f5f9;
        border-radius: 50%;
        color: #475569;
        cursor: pointer;
    }
  `,
})
export class DynamicDialogComponent {
  dialogRef = inject(DialogRef);
  data: SupDialogData = inject(DIALOG_DATA);

  close() {
    this.dialogRef.close();
  }
}

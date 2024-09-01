import { NgModule } from '@angular/core';
import {
  SupDialogContent,
  SupDialogFooter,
  SupDialogHeader,
} from './dynamic-dialog-directives';
import { SupDialog } from './dynamic-dialog';

const DIRECTIVES = [SupDialogHeader, SupDialogContent, SupDialogFooter];

@NgModule({
  imports: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [SupDialog],
})
export class SupDialogModule {}

import { Directive } from '@angular/core';
import { CdkScrollable } from '@angular/cdk/scrolling';

/**
 * Header of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
@Directive({
  selector: '[sup-dialog-header], [supDialogHeader]',
  standalone: true,
  host: {
    class: 'p-dialog-header',
  },
})
export class SupDialogHeader {}

/**
 * Scrollable content container of a dialog.
 */
@Directive({
  selector: `[sup-dialog-content], [supDialogContent]`,
  host: { class: 'p-dialog-content' },
  standalone: true,
  hostDirectives: [CdkScrollable],
})
export class SupDialogContent {}

/**
 * Footer of a dialog element. Stays fixed to the bottom when scrolling.
 */
@Directive({
  selector: `[sup-dialog-footer], [supDialogFooter]`,
  standalone: true,
  host: {
    class: 'p-dialog-footer',
  },
})
export class SupDialogFooter {}

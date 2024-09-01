import { DialogConfig } from '@angular/cdk/dialog';
import { BasePortalOutlet } from '@angular/cdk/portal';
import { Signal, TemplateRef } from '@angular/core';

export interface SupDefaultDialogConfig<
  D = unknown,
  R = unknown,
  C extends BasePortalOutlet = BasePortalOutlet
> extends DialogConfig<D, R, C> {
  bodyTemplate?: TemplateRef<any>;
  closeIcon?: Signal<string> | string;
  footerTemplate?: TemplateRef<any>;
  headerTemplate?: TemplateRef<any>;
  showCloseIcon?: Signal<boolean> | boolean;
  title?: Signal<string> | string;
}

export interface SupDialogData {
  bodyTemplate?: TemplateRef<any>;
  closeIcon: Signal<string>;
  footerTemplate?: TemplateRef<any>;
  headerTemplate?: TemplateRef<any>;
  showCloseIcon: Signal<boolean>;
  title: Signal<string>;
}

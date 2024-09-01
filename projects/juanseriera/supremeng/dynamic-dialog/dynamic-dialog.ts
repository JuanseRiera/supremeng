import { inject, Injectable, TemplateRef } from '@angular/core';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { BasePortalOutlet, ComponentType } from '@angular/cdk/portal';
import { DynamicDialogComponent } from './dynamic-dialog.component';
import {
  normalizeConfig,
  normalizeDefaultConfig,
} from './dynamic-dialog-utils';
import { SupDefaultDialogConfig } from './dynamic-dialog-config';

@Injectable({
  providedIn: 'root',
})
export class SupDialog {
  private dialog = inject(Dialog);

  open<T, D = any, R = any>(
    componentOrTemplateRef: ComponentType<any> | TemplateRef<any>,
    config:
      | DialogConfig<unknown, DialogRef<unknown, any>, BasePortalOutlet>
      | undefined
  ) {
    return this.dialog.open(componentOrTemplateRef, normalizeConfig(config));
  }

  openDefault<T, D = any, R = any>(
    config: SupDefaultDialogConfig<D, DialogRef<R, T>>
  ) {
    return this.dialog.open(
      DynamicDialogComponent,
      normalizeDefaultConfig(config)
    );
  }
}

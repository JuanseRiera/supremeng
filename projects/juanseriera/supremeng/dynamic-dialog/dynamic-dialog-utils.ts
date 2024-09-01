import { isSignal, signal } from '@angular/core';
import { SupDefaultDialogConfig } from './dynamic-dialog-config';
import { DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { BasePortalOutlet } from '@angular/cdk/portal';

export function normalizeConfig(
  config:
    | DialogConfig<unknown, DialogRef<unknown, any>, BasePortalOutlet>
    | undefined
) {
  let panelClass;

  if (config && typeof config.panelClass === 'string') {
    panelClass = config.panelClass + ' p-dialog';
  } else if (config && Array.isArray(config.panelClass)) {
    panelClass = [...config.panelClass, 'p-dialog'];
  } else {
    panelClass = 'p-dialog';
  }

  return {
    ...config,
    panelClass,
  };
}

export function normalizeDefaultConfig(
  config: SupDefaultDialogConfig<any, any>
) {
  let {
    headerTemplate,
    bodyTemplate,
    footerTemplate,
    closeIcon,
    showCloseIcon,
    title,
    ...defConfig
  } = config;

  if (!isSignal(closeIcon)) {
    closeIcon = signal(closeIcon || '');
  }

  if (!isSignal(showCloseIcon)) {
    showCloseIcon = signal(showCloseIcon || false);
  }

  if (!isSignal(title)) {
    title = signal(title || '');
  }

  return {
    ...defConfig,
    data: {
      ...defConfig.data,
      bodyTemplate,
      closeIcon,
      footerTemplate,
      headerTemplate,
      showCloseIcon,
      title,
    },
  };
}

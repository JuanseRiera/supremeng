import { Component, inject, TemplateRef } from '@angular/core';
import { SupDialog, SupDialogModule } from '@juanseriera/supremeng/dynamic-dialog';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonDirective, SupDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  supDialog = inject(SupDialog);

  openDefaultModal(bodyTemplate: TemplateRef<any>) {
    this.supDialog.openDefault({
      width: "300px",
      minWidth: "300px",
      title: 'this is my title',
      showCloseIcon: true,
      bodyTemplate,
    });
  }
}

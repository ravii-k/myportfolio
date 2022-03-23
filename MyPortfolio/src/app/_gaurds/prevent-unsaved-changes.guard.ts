import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<ContactComponent> {
  canDeactivate(component: ContactComponent) {
    if (component.contactForm.dirty) {
      return confirm('Are you sure want to continue? Any unsaved changes will be lost');
    }
    return true;
  }
}

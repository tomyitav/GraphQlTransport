import { Injectable } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Injectable()
export class DeleteDialogService {

  constructor(private popup: Popup) {
    this.popup.options = {
      color: "#aba27e",
      header: "Are you sure?",
    }
  }

  show() {
    this.popup.show();
  }

  hide() {
    this.popup.hide();
  }
}

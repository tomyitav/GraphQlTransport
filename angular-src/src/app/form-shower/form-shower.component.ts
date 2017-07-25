import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-form-shower',
  templateUrl: './form-shower.component.html',
  styleUrls: ['./form-shower.component.css']
})
export class FormShowerComponent{

  showForm = false;
  readonly addStr = 'Add ';
  readonly editStr = 'Edit ';
  text;
  @Output() showedChange = new EventEmitter();
  @Output() editTextChange = new EventEmitter();

  @Input()
  get showed() {
    return this.showForm;
  }

  set showed(val) {
    this.showForm= val;
    this.showedChange.emit(this.showForm);
  }

  @Input()
  get editText() {
    return this.text;
  }

  set editText(val) {
    this.text= val;
    this.editTextChange.emit(this.text);
  }

  toggleForm() {
    this.showed = !this.showed;
    if(!this.showed) {
      this.editText = this.addStr;
    }
  }
}

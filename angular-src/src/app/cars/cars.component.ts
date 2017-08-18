import {Component, OnInit} from "@angular/core";
import {ApolloCarsService} from "../services/apollo-cars/apollo-cars.service";
import {MdDialog, MdDialogRef} from '@angular/material';
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  readonly addText = 'Add ';
  readonly editText = 'Edit ';
  cars;
  selectedCar;
  editModeText = this.addText;
  formShown = false;
  modalOption = false;
  constructor(private apolloCars: ApolloCarsService,
              private popup: Popup) {
    this.getCars();
    this.startSubscriptions();
  }

  ngOnInit() {

  }

  getCars() {
    this.apolloCars.getAllCars().map(data => data.data.car).subscribe(cars => {
        console.log('Got data: ', cars);
        this.cars = cars;
      }
    )
  }

  startSubscriptions() {
    this.subscribeToUpdates();
    this.subscribeToAdds();
    this.subscribeToDeletes();
  }

  subscribeToUpdates() {
    this.apolloCars.subscribeToUpdates()
      .subscribe({
        next: updatedCar => {
          this.getCars();
        },
        error: (err) => {
          console.log('Error- ', err);
        }
      })
  }
  subscribeToAdds() {
    this.apolloCars.subscribeToAdds()
      .subscribe({
        next: data => {
          this.getCars();
        },
        error: (err) => {
          console.log('Error- ', err);
        }
      })
  }
  subscribeToDeletes() {
    this.apolloCars.subscribeToDeletes()
      .subscribe({
        next: data => {
          console.log('loggign after delete');
          this.getCars();
        },
        error: (err) => {
          console.log('Error- ', err);
        }
      })
  }

  onSubmit(car) {
    console.log('Logging form car ', car);
    console.log('Logging old ', this.selectedCar);
    if(this.editModeText === this.editText) {
      this.apolloCars.editCar(this.selectedCar, car);
    }
    else {
      this.apolloCars.addNewCar(car);
    }
    this.selectedCar = car;
  }

  showEditForm(car) {
    this.selectedCar = car.name;
    this.formShown = true;
    this.editModeText = 'Edit ';
  }

  deleteCar(car) {
    this.popup.options = {
      color: "#4180ab",
      header: "Are you sure?",
      }
    this.popup.show();
    console.log('Deleting!');
  }

  confirm() {
    console.log('confirming!!!');
    this.popup.hide();
  }
}

import {Component, OnInit} from "@angular/core";
import {ApolloTrainsService} from "../services/apollo-trains/apollo-trains.service";
import { Logger } from "angular2-logger/core";

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  readonly addText = 'Add ';
  readonly editText = 'Edit ';
  trains;
  selectedTrain;
  editModeText = this.addText;
  formShown = false;
  constructor(private logger: Logger, private apolloTrain: ApolloTrainsService) {
    this.getTrains();
    this.startSubscriptions();
  }

  startSubscriptions() {
    this.logger.info('Starting train subscriptions...');
    this.subscribeToUpdates();
    this.subscribeToAdds();
    this.subscribeToDeletes();
  }

  subscribeToUpdates() {
    this.apolloTrain.subscribeToUpdates()
      .subscribe({
        next: updatedCar => {
          this.getTrains();
        },
        error: (err) => {
          console.log('Error- ', err);
        }
      })
  }
  subscribeToAdds() {
    this.apolloTrain.subscribeToAdds()
      .subscribe({
        next: data => {
          this.getTrains();
        },
        error: (err) => {
          console.log('Error- ', err);
        }
      })
  }
  subscribeToDeletes() {
    this.apolloTrain.subscribeToDeletes()
      .subscribe({
        next: train => {
          console.log('loggign after delete');
          this.getTrains();
        },
        error: (err) => {
          console.log('Error- ', err);
        }
      })
  }

  ngOnInit() {
  }

  getTrains() {
    this.apolloTrain.getAllTrains().map(data => data.data.train).subscribe(trains => {
      console.log('got trains: ', trains);
      this.trains = trains;
    })
  }

  onSubmit(name, speed, diesel) {
    let parsedSpeed = parseInt(speed);
    let parsedDiesel = (diesel == 'true');
    if(this.editModeText === this.editText) {
      this.apolloTrain.editTrain(this.selectedTrain._id, name, parsedSpeed, parsedDiesel);
    }
    else {
      this.apolloTrain.addTrain(name, parsedSpeed, parsedDiesel);
    }
  }

  deleteTrain(train) {
    console.log('Deleting train - ', train.name);
    this.apolloTrain.deleteTrain(train.name);
  }

  showEditForm(train) {
    this.editModeText = this.editText;
    this.selectedTrain = train;
    this.formShown = true;
  }

}

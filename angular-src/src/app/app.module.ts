import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdDialogModule} from "@angular/material";
import {ApolloModule} from "apollo-angular";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ApolloCarsService} from "./services/apollo-cars/apollo-cars.service";
import {getClient} from "./graphql.client";
import "hammerjs";
import {AppComponent} from "./app.component";
import {CarsComponent} from "./cars/cars.component";
import {TransportToolbarComponent} from "./transport-toolbar/transport-toolbar.component";
import {RouterModule} from "@angular/router";
import {FormShowerComponent} from "./form-shower/form-shower.component";
import {TrainsComponent} from "./trains/trains.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ApolloTrainsService} from "./services/apollo-trains/apollo-trains.service";
import { Logger, Options as LoggerOptions, Level as LoggerLevel } from "angular2-logger/core";
import { PopupModule } from 'ng2-opd-popup';
import { DeleteDialogService } from './services/delete-dialog/delete-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    TransportToolbarComponent,
    FormShowerComponent,
    TrainsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdDialogModule,
    ApolloModule.withClient(getClient),
    FlexLayoutModule,
    PopupModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: CarsComponent
      },
      {
        path: 'cars',
        component: CarsComponent
      },
      {
        path: 'trains',
        component: TrainsComponent
      }
    ])
  ],
  providers: [ApolloCarsService , ApolloTrainsService, Logger,
    { provide: LoggerOptions, useValue: { level: LoggerLevel.INFO }}, DeleteDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

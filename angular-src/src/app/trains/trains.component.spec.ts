import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TrainsComponent} from "./trains.component";
import {FormShowerComponent} from "../form-shower/form-shower.component";
import {ApolloTrainsService} from "../services/apollo-trains/apollo-trains.service";
import {FormsModule} from "@angular/forms";
import {ApolloModule} from "apollo-angular";
import {getClient} from "../graphql.client";
import { Logger } from "angular2-logger/core";

describe('TrainsComponent', () => {
  let component: TrainsComponent;
  let fixture: ComponentFixture<TrainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsComponent, FormShowerComponent ],
      providers: [ApolloTrainsService, Logger],
      imports: [FormsModule, ApolloModule.withClient(getClient)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

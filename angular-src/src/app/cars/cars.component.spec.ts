import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponent } from './cars.component';
import {ApolloCarsService} from "../services/apollo-cars/apollo-cars.service";
import {FormShowerComponent} from "../form-shower/form-shower.component";
import {FormsModule} from "@angular/forms";
import {ApolloModule} from "apollo-angular";
import {getClient} from "../graphql.client";


describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsComponent, FormShowerComponent],
      providers: [ApolloCarsService],
      imports: [FormsModule, ApolloModule.withClient(getClient)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

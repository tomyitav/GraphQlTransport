import {TestBed, inject} from "@angular/core/testing";
import {ApolloCarsService} from "./apollo-cars.service";
import {ApolloModule} from "apollo-angular";
import {getClient} from "../../graphql.client";
import {} from 'jasmine';

describe('ApolloCarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloModule.withClient(getClient)],
      providers: [ApolloCarsService]
    });
  });

  it('should be created', inject([ApolloCarsService], (service: ApolloCarsService) => {
    expect(service).toBeTruthy();
  }));
});

import {TestBed, inject} from "@angular/core/testing";
import {ApolloTrainsService} from "./apollo-trains.service";
import {ApolloModule} from "apollo-angular";
import {getClient} from "../../graphql.client";
import {} from 'jasmine';

describe('ApolloTrainsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloModule.withClient(getClient)],
      providers: [ApolloTrainsService]
    });
  });

  it('should be created', inject([ApolloTrainsService], (service: ApolloTrainsService) => {
    expect(service).toBeTruthy();
  }));
});

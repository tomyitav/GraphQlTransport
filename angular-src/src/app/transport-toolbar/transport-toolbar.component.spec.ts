import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportToolbarComponent } from './transport-toolbar.component';
import {Router} from "@angular/router";
import {} from 'jasmine';
import { Observable } from 'rxjs/Rx';

describe('TransportToolbarComponent', () => {
  let component: TransportToolbarComponent;
  let fixture: ComponentFixture<TransportToolbarComponent>;

  beforeEach(async(() => {
    let mockRouter = {
      navigate: jasmine.createSpy('navigate'),
      events: new Observable(observer => {
        observer.next('V');
      })
    }

    TestBed.configureTestingModule({
      declarations: [ TransportToolbarComponent ],
      providers: [{
        provide: Router, useValue: mockRouter
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

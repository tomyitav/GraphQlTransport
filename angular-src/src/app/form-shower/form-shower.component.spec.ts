import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormShowerComponent} from "./form-shower.component";
import {} from 'jasmine';

describe('FormShowerComponent', () => {
  let component: FormShowerComponent;
  let fixture: ComponentFixture<FormShowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormShowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should check toggleForm', () => {
    expect(component.showed).toBeDefined();
    expect(component.showed).toBe(false);
    component.toggleForm();
    expect(component.showed).toBe(true);
  })
});

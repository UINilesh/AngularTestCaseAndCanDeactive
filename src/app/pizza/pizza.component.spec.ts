import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { PizzaComponent } from './pizza.component';

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    }).compileComponents();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have a title 'I love pizza!'`, async(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toBeTruthy('I love pizza!');
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); <<< Remove this
});

  it(`method should be callled`, () => {
     spyOn(component, 'getPosts'); 
    fixture.detectChanges(); // trigger ngOnInit here
    expect(component.getPosts).toHaveBeenCalled()
  });
});

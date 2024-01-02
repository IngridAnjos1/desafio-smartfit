import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { locationMock } from '../../mocks/location.mock';
import { GetUnitsService } from 'src/app/services/get-units.service';


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = locationMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

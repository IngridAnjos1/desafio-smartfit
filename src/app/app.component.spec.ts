import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardComponent } from './components/card/card.component';
import { LegendComponent } from './components/legend/legend.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterUnitsService } from './services/filter-units.service';
import { GetUnitsService } from './services/get-units.service';
import { GetUnitServiceMock } from './mocks/get-unit.service.mock';
import { locationMock } from './mocks/location.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let getUnitService: GetUnitsService;

  beforeEach(() => {
     TestBed.configureTestingModule({
    imports:[
      RouterTestingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
    ],
    declarations: [
      AppComponent,
      HeaderComponent,
      FormsComponent,
      CardsListComponent,
      CardComponent,
      LegendComponent,
      FooterComponent],
    providers:[
      FilterUnitsService,{
        provide:GetUnitsService,
        useValue:GetUnitServiceMock
      }
    ]
  }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    getUnitService = TestBed.inject(GetUnitsService);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('shold set unitLists onSubmit', ()=>{
    component.onSubmit();

    expect(getUnitService.getFilteredUnits).toHaveBeenCalled();
    expect(component.unitsList).toEqual([locationMock]);
  });
});
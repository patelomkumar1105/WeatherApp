import { Component } from '@angular/core';
import { WeatherService } from '../Service/weather.service';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent {
  
  constructor(public weatherService: WeatherService){};

  // functions to control tab values or tab states

  // function for click of tab Today
  onTodayClick() {

  }

  // function for click of tab Week
  onWeekClick() {
    this.weatherService.week = true;
    this.weatherService.today = false;
  }

  // function to control mrtric values 

  // function for click of metric celsius
  onCelsiusClick() {
    this.weatherService.celsius = true;
    this.weatherService.fahrenheit = false;
  }

  // function for click of metric fahrenheit
  onFahrenheitClick() {
    this.weatherService.fahrenheit = true;
    this.weatherService.celsius = false;
  }


}

import { Car } from 'src/app/models/car.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  public carDetail: Car[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}

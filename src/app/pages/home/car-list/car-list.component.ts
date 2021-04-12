
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  public cars: Car[] = [];

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carService.getCars().subscribe(data => this.cars = data);
  }

  showCarDetails(id: number) {
    this.router.navigate(['detail', id], { relativeTo: this.route });
  }

}

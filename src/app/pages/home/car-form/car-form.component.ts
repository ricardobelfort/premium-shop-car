import { Car } from './../../../models/car.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  public car : any;

  constructor(private carService: CarService, private route: ActivatedRoute, private toastrService : ToastrService, private router : Router) { }

  ngOnInit(): void {

    let params: Params = this.route.params;
    const id = params.value.id;
    if(id != null){
      this.carService.detailsById(id).subscribe(car => { this.car = car}, erro => { return null })
    }
  }

  tanks(){
    this.toastrService.success("Obrigado pela preferência!");
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 2000)
  }

}

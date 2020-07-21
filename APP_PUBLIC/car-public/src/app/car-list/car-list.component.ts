import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { Router } from '@angular/router';
import { CarDataService } from '../car-data.service';
import { DetailsPageComponent } from '../details-page/details-page.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [ CarDataService ]
})
export class CarListComponent implements OnInit {

  cars: Car[]
  selectedCar: Car

  constructor(private carService: CarDataService, private router: Router) { }

  ngOnInit() {
    this.carService
        .getCars()
        .then((cars: Car[]) => {
            this.cars = cars.map(car => {
                return car;
            });
        });
  }

  private getIndexOfCar = (carId: String) => {
    return this.cars.findIndex((car) => {
      return car._id === carId;
    });
  }

  selectCar(car: Car) {
    this.selectedCar = car;
    this.router.navigate(['cars']); // This is not working I dont know why
  }

  createCar() {

    var car: Car = {
      company     : '',
      model       : '',
      color       : '',
      description : '',
      price       : null,
      image       : ''
    };
    this.selectCar(car);
  }


  deleteCar = (carId: String) => {

    var idx = this.getIndexOfCar(carId);

    if (idx !== -1) {
      this.cars.splice(idx, 1);
      this.selectCar(null);
    }

    return this.cars;
  }



  addCar = (car: Car) => {

    this.cars.push(car);
    this.selectCar(car);

    return this.cars;
  }

  updateCar = (car: Car) => {
    var idx = this.getIndexOfCar(car._id);

    if (idx !== -1) {
      this.cars[idx] = car;
      this.selectCar(car);
    }

    return this.cars;
  }

  pageContent = {
    header: {
      title: 'List of Cars'
    }
  }

}

import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css'],
  providers: [CarDataService]
})
export class ViewCarComponent implements OnInit {

  constructor(private CarService: CarDataService, private route: ActivatedRoute,) { }

  car: Car

  ngOnInit(): void {
  	this.route.params.pipe(
        switchMap((params: Params) => {
            return this.CarService.getSingleCar(params['carid'])
        }))
        .subscribe((car: Car) => {
            this.car = car;
            this.pageContent.header.title = car.model;
            this.pageContent.header.body = "Details for selected Car";
        });
  }

  pageContent = {
    header : {
        title: '',
        body: ''
    }

  };

}

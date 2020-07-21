
import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { Input } from '@angular/core';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [CarDataService]
})
export class DetailsPageComponent implements OnInit {

  imageUrl : string = '../../assets/img/default.jpg' ;
  fileToUpload : File = null;

  @Input()
  car: Car;

  @Input()
  createHandler: Function;

  @Input()
  updateHandler: Function;

  @Input()
  deleteHandler: Function;

  constructor(private CarService: CarDataService) { }



  ngOnInit(): void{}


  createCar(car: Car) {
    car['image'] = this.fileToUpload.name;

    // var formData = new FormData();
    // for ( var key in car ) {

    //     formData.set(key, car[key]);
    // }
    // formData.set('file', this.fileToUpload);
    // console.log(formData);

    this.CarService.createCar(car).then((newCar: Car) => {
      this.createHandler(newCar);
    });
  }

  updateCar(car: Car): void {
    this.CarService.updateCar(car).then((updatedCar: Car) => {
      this.updateHandler(updatedCar);
    });
  }

  deleteCar(carId: String): void {
    this.CarService.deleteCar(carId).then((deletedCarId: Car) => {
      this.deleteHandler(deletedCarId);
      window.location.href="";
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

}

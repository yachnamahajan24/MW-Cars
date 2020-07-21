import { Injectable } from '@angular/core';
import { Car } from './car';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class CarDataService {

  private url = 'http://localhost:3000/api/cars';
  private carsUrl;


  constructor (private http: HttpClient) {
    this.getUrl(this.url);
  }

  getCars(): Promise<void | Car[]> {
     return this.http.get(this.carsUrl)
                .toPromise()
                .then(response => response as Car[])
                .catch(this.handleError);
  }

  getSingleCar(carID:String) : Promise<void | Car> {
    return this.http.get(this.carsUrl + '/' + carID)
                    .toPromise()
                    .then(response => response as Car)
                    .catch(this.handleError);

  }

  createCar(newCar: Car): Promise<void | Car> {

    return this.http.post(this.carsUrl, newCar)
               .toPromise()
               .then(response => response as Car)
               .catch(this.handleError);
  }


  updateCar(updateCar: Car): Promise<void | Car> {
    return this.http.put(this.carsUrl + '/' + updateCar._id, updateCar)
               .toPromise()
               .then(response => response as Car)
               .catch(this.handleError);
  }

  deleteCar(carID: String): Promise<void | Car> {
    return this.http.delete(this.carsUrl + '/' + carID)
               .toPromise()
               .then(response => response as Car)
               .catch(this.handleError);
  }

  private handleError (error: any) {
    console.log("error");
  }

  private getUrl (uri) {
    return this.carsUrl = uri;
  }
}

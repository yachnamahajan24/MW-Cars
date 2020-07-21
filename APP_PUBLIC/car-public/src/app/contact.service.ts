import { Injectable } from '@angular/core';
import { Contact } from './contact';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class ContactService {

  private url = 'http://localhost:3000/api/contacts';
  private contactsUrl;


  constructor (private http: HttpClient) {
    this.getUrl(this.url);
  }

  getContacts(): Promise<void | Contact[]> {
     return this.http.get(this.contactsUrl)
                .toPromise()
                .then(response => response as Contact[])
                .catch(this.handleError);
  }


  createContact(newContact: Contact): Promise<void | Contact> {
    return this.http.post(this.contactsUrl, newContact)
               .toPromise()
               .then(response => response as Contact)
               .catch(this.handleError);
  }



  deleteContact(contactID: String): Promise<void | Contact> {
    return this.http.delete(this.contactsUrl + '/' + contactID)
               .toPromise()
               .then(response => response as Contact)
               .catch(this.handleError);
  }

  private handleError (error: any) {
    console.log("error");
  }

  private getUrl (uri) {
    return this.contactsUrl = uri;
  }
}

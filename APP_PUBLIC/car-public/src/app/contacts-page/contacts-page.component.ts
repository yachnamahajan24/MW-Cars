import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styles: [],
  providers: [ContactService]
})
export class ContactsPageComponent implements OnInit {

  public contact: Contact = {
    name: '',
    email: '',
    message: ''
  }

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
  }

  public createNewContact(newContact: Contact): void {
    this.contactService.createContact(newContact);
    this.router.navigate(['cars']);
  }

  pageContent = {
    header: {
      title: 'Contact Us'
    }
  };

}

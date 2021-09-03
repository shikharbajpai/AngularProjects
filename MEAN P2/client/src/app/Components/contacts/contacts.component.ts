import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';
import { Contact } from '../../shared/contact'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  contacts: Array<Contact>;
  firstName: string;
  lastName: string;
  phone: string;

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContact().subscribe(res => {
      this.contacts = res as any;
      console.log(res);
    },
      err => {
        if (err) throw err;
      });
  }

  addContact() {
    const newContact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone
    }

    this.contactService.addContact(newContact).subscribe(
      res => {
        this.contacts.push(res as any);
        console.log(res)
        this.contactService.getContact().subscribe(res => {
          this.contacts = res as any;
          console.log(res);
        });
      }
      , err => {
        if (err) throw err;
      })
  }
  deleteContact(id: any) {
    let contactArray = this.contacts;
    this.contactService.deleteContact(id).subscribe(res => {
      console.log(res);
      for (let i = 0; i < contactArray.length; i++) {
        if (contactArray[i]._id === id) {
          contactArray.splice(i, 1);
        }
      }
    }, err => {
      if (err) throw err;
    });
  }

}

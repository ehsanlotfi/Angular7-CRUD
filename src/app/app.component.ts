import { Component } from '@angular/core';

interface IContact{
  id:number;
  name:string;
  family:string;
  phone:number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  contacts : IContact[] = [];
  contact : IContact;

  constructor(){
    this.clear();
  }

  clear(){
    this.contact = {
      id: null,
      name : null,
      family : null,
      phone : null
    }
  }

  add(){
    if(!this.contact.id){
      const lastId = this.contacts.length ? Math.max(...this.contacts.map(f=>+f.id)) : -1;
      this.contact.id = lastId + 1;
      this.contacts.push({...this.contact});
      this.clear();
    } else {
      this.contacts[this.contacts.findIndex(f=>f.id === this.contact.id)] = this.contact;
      this.clear();
    }
  }

  remove(id){
    this.contacts = this.contacts.filter(f=>f.id !== id);
  }

  edit(item : IContact){
    this.contact = item;
  }




}

import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { myContact } from '../models/myContact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  
  public Contact:myContact= {} as myContact;
  public group:any='';
   constructor(private cantservive:ContactService, private router:Router){

   }

   ngOnInit(){
    this.cantservive.getAllGroups().subscribe((data:any)=>{
      this.group=data;
      console.log(data);
    })
   }


   addSubmit(){
    this.cantservive.CreateContact(this.Contact).subscribe((data:any)=>{
      this.router.navigate(['/'])
    })
   }

}

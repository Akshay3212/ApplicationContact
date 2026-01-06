import { Component } from '@angular/core';
import { myContact } from '../models/myContact';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrl: './contact-manager.component.css'
})
export class ContactManagerComponent {
  
  public loading:boolean = false;
  public Contacts:myContact[]=[];

  constructor(private cantservice:ContactService , private router:Router){
    
  }

 ngOnInit(){
  this.getalldata();
  
 }

 getalldata(){
  this.cantservice.getAllContact().subscribe((data:any)=>{
    this.Contacts=data;
  });
 }

 delete(id: any){
  this.cantservice.DeleteContact(id).subscribe((result:any)=>{
  this.getalldata(); 
  })
 }
 }


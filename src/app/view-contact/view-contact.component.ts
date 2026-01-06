import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { myContact } from '../models/myContact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrl: './view-contact.component.css'
})
export class ViewContactComponent {

  public contactsdata:any=[];
  public contactId:string | null = null;
  public group:any=[];

  constructor(private cantservice:ContactService,private route:ActivatedRoute){

  }

  ngOnInit(){
     this.route.paramMap.subscribe((param)=>{
      this.contactId=param.get('contactId')
     });

     if(this.contactId){ 
      this.cantservice.getSingleContact(this.contactId).subscribe((data:any)=>{
        this.contactsdata=data;

        //Group id varun group name ghetla
        this.cantservice.getGroup(data).subscribe((result:any)=>{
          this.group=result;
        })
      })
     }
  }
}

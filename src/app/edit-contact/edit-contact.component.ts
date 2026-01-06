import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {
 
  public contactsdata:any=[];
  public contactId:string | null = null;
  public group:any=[];

  constructor(private cantservice:ContactService,private route:ActivatedRoute, private router:Router){
    this.submitMethod();
  }

  ngOnInit(){
     this.route.paramMap.subscribe((param)=>{
      this.contactId=param.get('contactId')
     });

     if(this.contactId){ 
      this.cantservice.getSingleContact(this.contactId).subscribe((data:any)=>{
        this.contactsdata=data;
        console.log(data)

        //Group id varun group name ghetla
        this.cantservice.getAllGroups().subscribe((result:any)=>{
          this.group=result;
          console.log(result);
        })
      })
     }

    
  }

  submitMethod(){
    if(this.contactId){
      this.cantservice.UpdateContact(this.contactsdata,this.contactId).subscribe((data)=>{
        this.contactsdata=data;
        this.router.navigate(['/'])
      })
    }
    
  }

  
}


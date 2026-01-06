import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { myContact } from '../models/myContact';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { 

  }

  // getAllData
  public getAllContact(){
    return this.http.get<myContact>('http://localhost:3000/Contact');
  }


  // getSingleData
  public getSingleContact(id:string){
    return this.http.get<myContact>(`http://localhost:3000/Contact/${id}`);
  }

  // PostData
  public CreateContact(data:any){
    return this.http.post('http://localhost:3000/Contact',data);
  }

  //UpdateContact
  public UpdateContact(data:any,id:string){
    return this.http.put(`http://localhost:3000/Contact/${id}`,data);
  }

  public DeleteContact(id:number){
    return this.http.delete(`http://localhost:3000/Contact/${id}`);
  }


  //Get all groups
  public getAllGroups(){
    return this.http.get<myContact>('http://localhost:3000/Groups');
  }

  //GetSingleGroup
  public getGroup(Contact:myContact){
    return this.http.get(`http://localhost:3000/Groups/${Contact.GroupId}`)
  }
}

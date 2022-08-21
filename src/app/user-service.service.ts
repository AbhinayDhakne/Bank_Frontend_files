import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  public doRegistration(user: User){
    return this.http.post("http://localhost:8086/addUser",user);
  }

  public getUsers(){
    return this.http.get("http://localhost:8086/getAllUser");
  }

  public getUserById(userid: number){
    return this.http.get("http://localhost:8086/getuser/"+userid);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8086/update/${id}`, value);
  }  

  public deleteUser(userid: number){
    return this.http.delete("http://localhost:8086/deleteuser/"+userid);
  }
}

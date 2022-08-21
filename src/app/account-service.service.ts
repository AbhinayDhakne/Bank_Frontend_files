import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http:HttpClient) { }

  public doRegistration(acc: Account){
    return this.http.post("http://localhost:8086/acc/addAccount",acc);
  }

  public getAccounts(){
    return this.http.get("http://localhost:8086/acc/getAllAccount");
  }

  public getAccountById(accid: number){
    return this.http.get("http://localhost:8086/acc/getaccount/"+accid);
  }

  updateAccount(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8086/acc/update/${id}`, value);
  }  

  public deleteAccount(accid: number){
    return this.http.delete("http://localhost:8086/acc/deleteaccount/"+accid);
  }
}

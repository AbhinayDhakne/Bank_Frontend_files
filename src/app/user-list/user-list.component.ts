import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute,Router,NavigationStart} from '@angular/router';
import { User } from '../user';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any;
  message:any;
  constructor(private http:HttpClient,private route:ActivatedRoute,private service:UserServiceService,private router: Router) {}

  totalLength:any;
  page:number =1;
  totalLength1:any;
  page1:number =1;
  showpost:any=[];
  showpost1:any=[];
  ngOnInit(): void {
    let response=this.http.get("http://localhost:8086/GetAllUser");
    response.subscribe((data)=>{
    this.users=data;
    this.showpost=data;
    this.totalLength=this.showpost.length;
    // console.log(this.showpost);
    });
  }

  public deleteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=> {console.log(data);});
    this.router.navigate(['users']);
  }

  updateUser(id: number){
    this.router.navigate(['update', id]);
  }
}

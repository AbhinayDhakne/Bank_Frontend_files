import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router,NavigationStart} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User=new User();
  users:any;
  message:any;

  exform!: FormGroup;

  constructor(private service:UserServiceService,private router: Router) { }
// ^[0-9]+$
  ngOnInit() {

    this.exform = new FormGroup({
      // 'userid' : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'mobile' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
        'smobile' : new FormControl(
          null,
          [
            Validators.required,
            Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
          ]),
        'gender' : new FormControl(null, Validators.required),
        'dob' : new FormControl(null, Validators.required),
    })
  }
  
  public findUserById(id:number){
    let resp= this.service.getUserById(id);
    resp.subscribe((data)=>this.users=data);
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(['users']);
  }
}

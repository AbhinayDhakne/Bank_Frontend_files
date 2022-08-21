import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountServiceService } from '../account-service.service';
import { Router,NavigationStart} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account=new Account();
  accounts:any;
  message:any;

  exform!: FormGroup;

  constructor(private service:AccountServiceService,private router: Router) { }

  ngOnInit(){
    this.exform = new FormGroup({
      // 'accid' : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'userid' : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'bname' : new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      'atype' : new FormControl(null, [Validators.required]),
      'abalance' : new FormControl(null, [Validators.required]),
        
    })
  }
  
  public findAccountById(id:number){
    let resp= this.service.getAccountById(id);
    resp.subscribe((data)=>this.accounts=data);
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.account);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(['accounts']);
  }
}

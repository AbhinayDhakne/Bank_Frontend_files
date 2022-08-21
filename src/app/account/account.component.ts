import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  id!: number;
  account: any;

  exform!: FormGroup;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private service: AccountServiceService) { }

    ngOnInit() {
      this.account = new Account();
  
      this.id = this.route.snapshot.params['id'];
      
      this.service.getAccountById(this.id)
        .subscribe(data => {
          console.log(data);
          this.account = data;
        }, error => console.log(error));

      this.exform = new FormGroup({
        // 'accid' : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
        // 'userid' : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
        'bname' : new FormControl(null, Validators.required),
        'atype' : new FormControl(null, Validators.required ),
        'abalance' : new FormControl(null, Validators.required )     
      })
      
    }

    updateAccount() {
      this.service.updateAccount(this.id, this.account)
        .subscribe(data => {
          console.log(data);
          this.account = new Account();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.updateAccount();    
    }
  
    gotoList() {
      this.router.navigate(['/accounts']);
    }

}


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  id!: number;
  user: any;

  exform!: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,
    private service: UserServiceService) { }

    ngOnInit() {
      this.user = new User();
  
      this.id = this.route.snapshot.params['id'];
      
      this.service.getUserById(this.id)
        .subscribe(data => {
          console.log(data);
          this.user = data;
        }, error => console.log(error));
      
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
  
    updateUser() {
      this.service.updateUser(this.id, this.user)
        .subscribe(data => {
          console.log(data);
          this.user = new User();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.updateUser();    
    }
  
    gotoList() {
      this.router.navigate(['/users']);
    }

    
}


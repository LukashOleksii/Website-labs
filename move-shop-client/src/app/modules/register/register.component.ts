import { Component, OnInit } from '@angular/core';
import {User} from '../root/services/user';
import {UserService} from '../root/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  submitted = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  save(){
    this.userService.createUser(this.user)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
          alert('User has created!' );
        },
        error => {
          console.log(error);
          alert('Try again, you enter invalid data!');
        }),
      this.user = new User();
  }
  onSubmit() {
    this.save();
  }
}

import { Component, Input, OnInit } from '@angular/core';

import {User} from '../../services/user';
import {UserService} from '../../services/user.service';
import {LoginnnComponent} from '../loginnn/loginnn.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private userService: UserService) { }

  @Input() showMe;
  ngOnInit(): void {
  }
  save() {
    this.userService.createUser(this.user)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
          alert('User with username' + this.user.username + 'created!' );
        },
        error => {
          console.log(error);
          alert('Try again, you enter invalid data !');
        }),

      this.user = new User();
  }
  onSubmit() {
    this.save();
  }

  closeRegistration(){
    this.showMe.show = !this.showMe.show;
  }
}

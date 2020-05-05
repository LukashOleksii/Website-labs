import { Component, OnInit } from '@angular/core';
import {User} from '../root/services/user';
import {UserService} from '../root/services/user.service';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  }

  onLogin() {

    this.authenticationService.login(this.user)
      .pipe(first())
      .subscribe(
        res => {
          console.log(res);
          alert('User ' + this.user.username + ' logged!');
        },
        error => {
          console.log(error);
          alert('Dont search user with ' + this.user.username + ' username or your password is not correct' );
        });
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Cart} from '../../services/cart';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../../../services/authentication.service';
import {CartComponent} from '../cart/cart.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private userServices: UserService,
    private authenticationService: AuthenticationService,
    private favoriteServices: CartService,
  ) { }
  showVar = false;
  cartVar = false;
  menuVar = false;
  favoriteVar = false;
  loginVar;


  ngOnInit(): void {
    if (this.authenticationService.currentUserValue == null) {
      this.loginVar = true;
    }
  }

  onLogOut() {
    this.authenticationService.logout();
    alert('You are logged out!');
    if (this.authenticationService.currentUserValue == null) {
      this.loginVar = true;
    }
    this.cartVar = false;
    this.favoriteVar = false;
  }

  toggleChild() {
    this.showVar = !this.showVar;
    this.cartVar = false;
    this.favoriteVar = false;
    this.menuVar = false;
  }

  viewCart() {
    if (this.authenticationService.currentUserValue == null) {
      alert('Please log in if you want see your cart!');
    } else {
      this.favoriteServices.getData();
      this.cartVar = !this.cartVar;
    }
    this.showVar = false;
    this.favoriteVar = false;
    this.menuVar = false;
  }

  viewFavorite() {
    if (this.authenticationService.currentUserValue == null) {
      alert('Please log in if you want see your favorites products!');
    } else {
      this.favoriteServices.getFavorite();
      this.favoriteVar = !this.favoriteVar;
    }
    this.showVar = false;
    this.cartVar = false;
    this.menuVar = false;
  }

  viewMenu() {
    this.favoriteVar = false;
    this.showVar = false;
    this.cartVar = false;
    this.menuVar = !this.menuVar;
  }

  close() {
    this.favoriteVar = false;
    this.showVar = false;
    this.cartVar = false;
    this.menuVar = false;
  }

}


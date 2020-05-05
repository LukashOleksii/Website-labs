import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginnnComponent } from './components/loginnn/loginnn.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {FormsModule} from '@angular/forms';
import {CartComponent} from './components/cart/cart.component';
import {FavoriteComponent} from './components/favorite/favorite.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    RootComponent,
    FooterComponent,
    HeaderComponent,
    HeaderComponent,
    LoginnnComponent,
    RegistrationComponent,
    CartComponent,
    FavoriteComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    FormsModule
  ]
})
export class RootModule { }

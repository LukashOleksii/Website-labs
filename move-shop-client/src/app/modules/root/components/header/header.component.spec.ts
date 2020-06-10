import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from "../../services/user.service";

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should make favorite invisible when cart is open', ()=>{
    component.viewCart();
    expect(component.favoriteVar).toBeFalse();
  })
  it('should make menu invisible when cart is open', ()=>{
    component.viewCart();
    expect(component.menuVar).toBeFalse();
  })
  it('should make hide all modal windows when log in', ()=>{
    component.close();
    expect(component.favoriteVar).toBeFalse();
    expect(component.showVar).toBeFalse();
    expect(component.cartVar).toBeFalse();
    expect(component.menuVar).toBeFalse();
  })

});

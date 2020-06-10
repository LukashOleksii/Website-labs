import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginnnComponent } from './loginnn.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from "../../services/user.service";
import {AuthService} from "angularx-social-login";

describe('LoginComponent', () => {
  let component: LoginnnComponent;
  let fixture: ComponentFixture<LoginnnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
      declarations: [ LoginnnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should make register visible', () => {
    component.showRegistration();
    expect(component.showReg.show).toBeTruthy();
  });
});

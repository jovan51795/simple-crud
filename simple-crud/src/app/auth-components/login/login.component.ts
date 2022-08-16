import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserAuth } from '../model/auth-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup

  constructor(private fb: FormBuilder, private userService: AuthService, private router: Router) {
    this.loginFormGroup = this.fb.group({
      email: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
  }

  login = () => {
    const userData = this.loginFormGroup.getRawValue() as UserAuth
    this.userService.login(userData).subscribe()

  }

  goToRegister(){
    this.router.navigate(['register'])
  }

}

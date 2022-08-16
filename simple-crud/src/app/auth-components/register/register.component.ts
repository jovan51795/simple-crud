import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserAuth } from '../model/auth-model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerFormGroup = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
  }

  register = () => {
    const userData = this.registerFormGroup.getRawValue() as UserAuth
    this.authService.register(userData).subscribe()
  }

}

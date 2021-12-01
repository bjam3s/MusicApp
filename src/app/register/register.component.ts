import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterUser } from '../RegisterUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser: RegisterUser = {
    userName: '',
    password: '',
    password2: ''
  };
  warning: any;
  success: boolean = false;
  loading: boolean = false;
 
  constructor(private auth: AuthService) {}

  ngOnInit(): void {

  }

  onSubmit(f: NgForm): void {
    if(f.value.userName !== '' && f.value.password === f.value.password2) {
      this.loading = true;
      this.auth.register(this.registerUser).subscribe((register) => {
        this.loading = false;
        this.success = true;
        this.warning = "";
      },
      (err) => {
        this.success = false;
        this.warning = err.error.message;
        this.loading = false;
      }
    ); 
  } else if(f.value.password !== f.value.password2) {
    this.success = false;
    this.warning = "Passwords do not match";
    this.loading = false;
    } 
  }
}
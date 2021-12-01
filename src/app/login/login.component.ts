import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    userName: "", 
    password: "", 
    _id: ""
  };

  warning: any;
  loading: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    if(f.value.userName != '' && f.value.password != ''){
      this.loading = true;
      this.auth.login(this.user).subscribe((success) => {
        console.log("test");
        this.loading = false;
        localStorage.setItem('access_token', success.token);
        this.router.navigate(["/newReleases"]);
      },
      (err) => {
        this.warning = err.error.message;
        this.loading = false;
      }
      );
    }
  }
}

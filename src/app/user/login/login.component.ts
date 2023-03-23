import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  inSubmission = false;

  constructor(private router: Router, private auth: AngularFireAuth) {}

  credentials = {
    email: '',
    password: '',
  };

  async login() {
    this.inSubmission = true
    
    try{
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    }catch(e){
      this.inSubmission = false;
      alert("Something wrong occured... Please Try Again.")
      return
    }
    alert("Success... You logged in..")
  }
}

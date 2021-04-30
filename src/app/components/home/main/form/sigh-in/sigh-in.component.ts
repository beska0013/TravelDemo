import { Component, OnInit } from '@angular/core';
import {FormComponent} from '../form.component';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-sigh-in',
  templateUrl: './sigh-in.component.html',
  styleUrls: ['./sigh-in.component.scss']
})
export class SighInComponent implements OnInit {

  constructor(private http: HttpClient) { }
  usersResponse: any = [];

  loginName = '';
  loginPassword = '';
  status: boolean;
  loginArrayTrue = [];
  loginArrayFalse = [];

  USERS_API = 'assets/fakeBackEnd/users.json';


   getUser(): void{
     const loginNameAlertMessage = document.getElementById('loginNameAlert');
     const loginPassword = document.getElementById('loginPasswordAlert');
     const profileLink = document.getElementById('profileLink');
     this.http.get(this.USERS_API).subscribe(response => {
       this.usersResponse = response;

       this.usersResponse.users.forEach( user => {
         if (this.loginName === user.userName && this.loginPassword === user.password){
           user.netStatus = true;
           this.loginArrayTrue.push(this.status = true);
         }

         if (user.netStatus === true){
           profileLink.classList.add('profile-link-show');
         }

         if (this.loginName !== user.userName){
           user.netStatus = false;
           this.loginArrayFalse.push( this.status = false);
         }

         if (this.loginPassword !== user.password){
           user.netStatus = false;
           this.loginArrayFalse.push( this.status = false);
         }
       });
       if (this.loginArrayFalse.length - this.usersResponse.users.length !== 1){
         loginNameAlertMessage.classList.add('show-alert');
         loginPassword.classList.add('show-alert');
       }
       console.log(this.loginArrayFalse.length);
       console.log(this.usersResponse.users.length);
     });
   }
















  ngOnInit(): void {
    this.loginName.toLowerCase();
    const submitBtn = document.getElementById('submitBtn');
    const nameInput = document.getElementById('loginName');
    const passInput = document.getElementById('password');
    const inputEye = document.getElementById('eye');
    const loginNameAlertMessage = document.getElementById('loginNameAlert');
    const loginPassword = document.getElementById('loginPasswordAlert');
    nameInput.onfocus = (): void => {
      loginNameAlertMessage.classList.remove('show-alert');
    };
    passInput.onfocus = (): void => {
      loginPassword.classList.remove('show-alert');
    };


    inputEye.addEventListener('click', () => {
      inputEye.classList.toggle('bx-show');
      if (inputEye.className.includes('bx-show')) {  passInput.attributes[1].value = 'text'; }
      if (!inputEye.className.includes('bx-show')) {  passInput.attributes[1].value = 'password'; }

    });

    submitBtn.addEventListener( 'click', () => {
      this.getUser();
      this.loginArrayTrue.splice(0, this.loginArrayTrue.length);
      this.loginArrayFalse.splice(0, this.loginArrayFalse.length);

      // event.preventDefault();
      // this.users.forEach( user => {
        // console.log(this.users.length);
       //  if (this.loginName === user.userName && this.loginPassword === user.password){
       // user.netStatus = true;
       // this.loginArrayTrue.push(this.status = true);
       // }
       //  if (this.loginName !== user.userName){
       //    user.netStatus = false;
       //    this.loginArrayFalse.push( this.status = false);
       //  }
       //  if (this.loginPassword !== user.password){
       //    user.netStatus = false;
       //    this.loginArrayFalse.push( this.status = false);
       //  }
        // if (user.netStatus === true){
        //   profileLink.classList.add('profile-link-show');
        // }
      // });

      // if (this.loginArrayFalse.length - this.users.length !== 1){
      //   loginNameAlertMessage.classList.add('show-alert');
      //   loginPassword.classList.add('show-alert');
      // }
      // console.log(this.loginArrayTrue);
      // console.log(this.loginArrayFalse);
      // console.log(this.users);

    });
  }
}

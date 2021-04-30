import { Component, OnInit } from '@angular/core';
import {FormComponent} from '../form.component';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) {}

  users = new FormComponent().users;
  data: any;
  errorMessage: any;
  registEmail: string;
  registPassword: string;
  repeatRegistPassword: string;
  USERS_API = 'assets/fakeBackEnd/users.json';



  user = [
    {
      id: 0,
      hotel: false,
      systemManager: false,
      guest: false,
      userName: '' ,
      password: '',
      netStatus: false
    }
  ];

  postUser(): void {
    this.http.post<any>('https://assets/fakeBackEnd/users.json', { title: 'Angular POST Request Example' }).subscribe(user => {
      this.data = user.id;
      console.log(this.data);
    });

  }







  ngOnInit(): void {
    const registSubmitBtn = document.getElementById('registSubmitBtn');
    registSubmitBtn.addEventListener('click', () => {
      this.user[0].id = this.users.length;
      this.user[0].userName = this.registEmail;
      this.user[0].password = this.repeatRegistPassword;
      // console.log(this.user[0]);
      this.users.push(this.user[0]);
      // console.log(this.users);



      this.postUser();
    });
  }

}

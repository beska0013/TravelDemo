import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home.component';
import {logger} from 'codelyzer/util/logger';
import {SighInComponent} from '../main/form/sigh-in/sigh-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  language = [
    {
      engLanguage: 'eng',
      geoLanguage: 'geo',
      header: {
        logo: 'Time to travel Georgia',
        home: 'Home',
        destination: 'Destination',
        sighnIn: 'sighn-in',
        registration: 'Registration',
        btnOne: 'GEO',
        btnTwo: 'ENG',
        profileLink: 'Profile Page',
        geoLogo: 'საქრთველოში მოგზაურობის დროა',
        geoHome: 'მთავარი',
        geoDestination: 'მიმართულება',
        geoSighnIn: 'შესვლა',
        geoRegistration: 'რეგისტრაცია',
        geoBtnOne: 'ქარ',
        geoBtnTwo: 'ინგ',
        geoProfileLink: 'პროფილის გვერდი'
      }
    }
  ];
  textContent = [
    {
      language: this.language[0].engLanguage,
      header: {
        logo : this.language[0].header.logo,
        home: this.language[0].header.home,
        destination: this.language[0].header.destination,
        sighnIn: this.language[0].header.sighnIn,
        registration: this.language[0].header.registration,
        btnOne: this.language[0].header.btnOne,
        btnTwo: this.language[0].header.btnTwo,
        profileLink: this.language[0].header.profileLink
      },
    }
  ];

     link = 'profile';





  ngOnInit(): void {
    // console.log(this.link);
    const homeBtn = document.getElementById('homeBtn');
    const destinationBtn = document.getElementById('destinationBtn');
    const signInBtn = document.getElementById('sighnInBtn');
    const registrationBtn = document.getElementById('registrationBtn');
    const profileBtn = document.getElementById('profileLink');
    const loginForm = document.getElementById('sighnInForm');
    const registrationForm = document.getElementById('registrationform');
    const placeInfo = document.getElementById('info');
    const textContent = document.getElementById('textContent');
    const hotelList = document.getElementById('list');
    const formContant = document.getElementById('formContant');
    const hotelRegist = document.getElementById('hotelRegist');


    destinationBtn.addEventListener('click' , () => {
      placeInfo.classList.add('show-list');
      textContent.classList.add('text-hide');
      hotelList.classList.add('hotel-list-show');
      hotelList.style.display = 'flex';
      formContant.style.opacity = '0';
      hotelRegist.style.opacity = '0';
      setTimeout(() => {
        formContant.classList.remove('form-show');
        textContent.classList.add('display-none');
        hotelRegist.style.display = 'none';
      }, 200);
    });

    homeBtn.addEventListener('click' , () => {
      placeInfo.style.width = '50%';
      placeInfo.classList.remove('show-list');
      textContent.classList.remove('text-hide');
      hotelList.classList.remove('hotel-list-show');
      formContant.style.opacity = '0';
      hotelRegist.style.opacity = '0';
      setTimeout(() => {
        formContant.classList.remove('form-show');
        textContent.classList.remove('display-none');
        hotelRegist.style.display = 'none';
      }, 200);

    });

    signInBtn.addEventListener('click' , () => {
      textContent.classList.add('text-hide');
      placeInfo.classList.remove('show-list');
      placeInfo.style.width = '0';
      formContant.classList.add('form-show');
      registrationForm.classList.remove('show-registForm');
      loginForm.style.display = 'flex';
      hotelRegist.style.opacity = '0';
      setTimeout(() => {
        formContant.style.opacity = '1';
        registrationForm.style.display = 'none';
        loginForm.classList.remove('login-hide');
        hotelRegist.style.display = 'none';
      }, 200);

    });

    registrationBtn.addEventListener('click' , () => {
      textContent.classList.add('text-hide');
      placeInfo.classList.remove('show-list');
      placeInfo.style.width = '0';
      formContant.classList.add('form-show');
      loginForm.classList.add('login-hide');
      registrationForm.style.display = 'flex';
      hotelRegist.style.opacity = '0';
      setTimeout(() => {
        loginForm.style.display = 'none';
        formContant.style.opacity = '1';
        registrationForm.classList.add('show-registForm');
        hotelRegist.style.display = 'none';
      }, 200);

    });

    profileBtn.addEventListener('click' , () => {
      textContent.classList.add('text-hide');
      placeInfo.style.width = '100%';
      hotelList.classList.remove('hotel-list-show');
      registrationForm.classList.remove('show-registForm');
      loginForm.classList.add('login-hide');
      hotelRegist.style.display = 'flex';
      setTimeout(() => {
        textContent.classList.add('display-none');
        hotelRegist.style.opacity = '1';
        hotelList.style.display = 'none';
      }, 200);

    });

    const geoBtn = document.getElementById('geoBtn');
    const engBtn = document.getElementById( 'engBtn');

    geoBtn.addEventListener('click' , () => {
      this.textContent[0].language =  this.language[0].geoLanguage;
      this.textContent[0].header.logo = this.language[0].header.geoLogo;
      this.textContent[0].header.home = this.language[0].header.geoHome;
      this.textContent[0].header.destination = this.language[0].header.geoDestination;
      this.textContent[0].header.sighnIn = this.language[0].header.geoSighnIn;
      this.textContent[0].header.registration = this.language[0].header.geoRegistration;
      this.textContent[0].header.btnOne = this.language[0].header.geoBtnOne;
      this.textContent[0].header.btnTwo = this.language[0].header.geoBtnTwo;
      this.textContent[0].header.profileLink = this.language[0].header.geoProfileLink;
      if ( this.textContent[0].language ===  this.language[0].geoLanguage ){
         geoBtn.style.backgroundColor = 'black';
         geoBtn.style.color = '#FFFFFF';
         engBtn.style.backgroundColor = '#FFFFFF';
         engBtn.style.color = '#000000';
      }

     });

    engBtn.addEventListener('click' , () => {
      this.textContent[0].language =  this.language[0].engLanguage;
      this.textContent[0].header.logo = this.language[0].header.logo;
      this.textContent[0].header.home = this.language[0].header.home;
      this.textContent[0].header.destination = this.language[0].header.destination;
      this.textContent[0].header.sighnIn = this.language[0].header.sighnIn;
      this.textContent[0].header.registration = this.language[0].header.registration;
      this.textContent[0].header.btnOne = this.language[0].header.btnOne;
      this.textContent[0].header.btnTwo = this.language[0].header.btnTwo;
      this.textContent[0].header.profileLink = this.language[0].header.profileLink;
      if ( this.textContent[0].language ===  this.language[0].engLanguage ){
        engBtn.style.backgroundColor = '#000000';
        engBtn.style.color = '#FFFFFF';
        geoBtn.style.backgroundColor = '#FFFFFF';
        geoBtn.style.color = '#000000';
      }

    });



  }

}

import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  geoBgImg = new HomeComponent().geoBgImages;
  txtContent = new HeaderComponent().textContent;
  lang = new HeaderComponent().language;
   mainTextContent = [
    {
      title : this.geoBgImg[0].name,
      text : this.geoBgImg[0].text
    }
  ];







  ngOnInit(): void {
    const hiddenMenu = document.getElementById('hidden-menu');
    const hiddenMenuBtn = document.getElementById('mobile-menu-button');

    hiddenMenuBtn.addEventListener('click', () => {
      hiddenMenu.classList.toggle('dp-flex');
    });

    const next = document.getElementById('next');
    const previous = document.getElementById('previous');
    const text = document.getElementById('text');
    const title = document.getElementById('title');
    const imgPlace = document.getElementById('imgPlace');
    const geoPlaces = this.geoBgImg;
    const img = imgPlace.children;


    img[0].attributes[1].value = geoPlaces[0].images[0].image;
    img[1].attributes[1].value = geoPlaces[0].images[1].image;
    img[2].attributes[1].value = geoPlaces[0].images[2].image;
    img[3].attributes[1].value = geoPlaces[0].images[3].image;

    let n = 0;
    let nn = n - 1;


    const geoBtn = document.getElementById('geoBtn');
    const engBtn = document.getElementById('engBtn');
    geoBtn.addEventListener('click', () => {
      this.txtContent[0].language = this.lang[0].geoLanguage;
      this.mainTextContent[0].title = this.geoBgImg[0].geo_name;
      this.mainTextContent[0].text = this.geoBgImg[0].geo_text;
    });
    engBtn.addEventListener('click', () => {
      this.txtContent[0].language = this.lang[0].engLanguage;
      this.mainTextContent[0].title = this.geoBgImg[0].name;
      this.mainTextContent[0].text = this.geoBgImg[0].text;
    });






    next.addEventListener('click', () => {
      n++;
      if (n > geoPlaces.length - 1) {
        n = 0;
      }
      let engTitle = geoPlaces[n].name ;
      let geoText = geoPlaces[n].text;

      img[0].attributes[1].value = geoPlaces[n].images[0].image;
      img[1].attributes[1].value = geoPlaces[n].images[1].image;
      img[2].attributes[1].value = geoPlaces[n].images[2].image;
      img[3].attributes[1].value = geoPlaces[n].images[3].image;
      geoBtn.addEventListener('click', () => {

        engTitle = geoPlaces[n].geo_name;
        geoText = geoPlaces[n].geo_text;
        title.innerHTML = `${engTitle}`;
        text.innerHTML = `${geoText}`;

      });
      if ( this.txtContent[0].language === this.lang[0].geoLanguage) {
        engTitle = geoPlaces[n].geo_name;
        geoText = geoPlaces[n].geo_text;
        title.innerHTML = `${engTitle}`;
        text.innerHTML = `${geoText}`;
      }
      engBtn.addEventListener('click', () => {
        engTitle = geoPlaces[n].name;
        geoText = geoPlaces[n].text;
        title.innerHTML = `${engTitle}`;
        text.innerHTML = `${geoText}`;
      });
      if ( this.txtContent[0].language === this.lang[0].engLanguage) {
        engTitle = geoPlaces[n].name;
        geoText = geoPlaces[n].text;
        title.innerHTML = `${engTitle}`;
        text.innerHTML = `${geoText}`;
      }
    });

    previous.addEventListener('click', () => {
      if (nn <= 0) {
        nn = geoPlaces.length;
      }
      nn--;
      let engTitle = geoPlaces[nn].name ;
      let geoText = geoPlaces[nn].text;

      img[0].attributes[1].value = geoPlaces[nn].images[0].image;
      img[1].attributes[1].value = geoPlaces[nn].images[1].image;
      img[2].attributes[1].value = geoPlaces[nn].images[2].image;
      img[3].attributes[1].value = geoPlaces[nn].images[3].image;

      geoBtn.addEventListener('click', () => {
        engTitle = geoPlaces[nn].geo_name;
        geoText = geoPlaces[nn].geo_text;
        title.innerHTML = `${engTitle}`;
        text.innerHTML = `${geoText}`;
      });

      if ( this.txtContent[0].language === this.lang[0].geoLanguage) {
        engTitle = geoPlaces[nn].geo_name;
        geoText = geoPlaces[nn].geo_text;
      }
      engBtn.addEventListener('click', () => {
        engTitle = geoPlaces[n].name;
        geoText = geoPlaces[n].text;
        title.innerHTML = `${engTitle}`;
        text.innerHTML = `${geoText}`;
      });
      if ( this.txtContent[0].language === this.lang[0].engLanguage) {
        engTitle = geoPlaces[nn].name;
        geoText = geoPlaces[nn].text;
      }
      title.innerHTML = `${engTitle}`;
      text.innerHTML = `${geoText}`;
    });


    let j = 0;
    async function hideInterval(): Promise<any> {
      j++;
      // console.log(img[j - 1]);
      img[j - 1].classList.toggle('hide');
      if (j >= img.length - 1) {
        j = 0;
      }
    }

    setInterval((hideInterval), 5000);
  }
}

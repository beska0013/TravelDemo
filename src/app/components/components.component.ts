import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-components',
  template: ` <router-outlet></router-outlet>`
})
export class ComponentsComponent implements OnInit {

  constructor(
  ) { }


  ngOnInit(): void {

  }

}

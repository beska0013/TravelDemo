import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainComponent } from './components/home/main/main.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HotelListComponent } from './components/home/main/hotel-list/hotel-list.component';
import { FormComponent } from './components/home/main/form/form.component';
import { SighInComponent } from './components/home/main/form/sigh-in/sigh-in.component';
import { RegistrationComponent } from './components/home/main/form/registration/registration.component';
import { HotelInfoComponent } from './components/home/main/hotel-info/hotel-info.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import {ServiceService} from './service.service';













const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: '**', component: NotFoundComponent},


];


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HotelListComponent,
    FormComponent,
    SighInComponent,
    RegistrationComponent,
    HotelInfoComponent,
    ProfilePageComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

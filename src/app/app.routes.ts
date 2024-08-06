import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginasabComponent } from './paginasab/paginasab.component';
import { PaginascdComponent } from './paginascd/paginascd.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'form', component: FormularioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent}
];



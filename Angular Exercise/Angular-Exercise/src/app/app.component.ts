import { Component } from '@angular/core';
import {Animal} from '../animal';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'Angular-Exercise';
  a=new Animal();
  name:string;

  
 
}

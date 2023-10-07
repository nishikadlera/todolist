import { Component } from '@angular/core';
import { todo } from './todolists';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  todo = new todo;
  
  constructor(){
    
    console.log(todo);
  }

}

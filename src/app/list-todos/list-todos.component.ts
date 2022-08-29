import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,'Learn to Code', false, new Date()),
    new Todo(2,'Become Angular Expert', false, new Date()),
    new Todo(3,'Become Springboot Expert', false, new Date()),
    // {id: 1, description : 'Learn to Code'},
    // {id: 2, description : 'Become Angular Expert'},
    // {id: 3, description : 'Become Springboot Expert'},
  ]

  // todo = {
  //   id : 1,
  //   description : 'Learn to code'
  // }//todo object

  constructor() { }

  ngOnInit(): void {
  }

}

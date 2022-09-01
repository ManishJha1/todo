import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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

  todos: Todo[] = [];//difference between initializr, assignment and undefined

  message!: string;

  // todos = [
  //   new Todo(1,'Learn to Code', false, new Date()),
  //   new Todo(2,'Become Angular Expert', false, new Date()),
  //   new Todo(3,'Become Springboot Expert', false, new Date()),
  //   // {id: 1, description : 'Learn to Code'},
  //   // {id: 2, description : 'Become Angular Expert'},
  //   // {id: 3, description : 'Become Springboot Expert'},
  // ]

  // todo = {
  //   id : 1,
  //   description : 'Learn to code'
  // }//todo object

  constructor(
    private todoService: TodoDataService,
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('Raghav').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('Raghav', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }

}

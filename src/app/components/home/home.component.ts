import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';
import { ITask as TaskModel } from 'src/app/models/Tasks.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks: TaskModel[] = [];

  constructor(public fireAuth: Auth, private router: Router, private authService: AuthService, private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe();
  }

  // tasks: any[] = [
  //   {taskId: 1, taskDesc: 'Go to doctor'},
  //   {taskId: 2, taskDesc: 'Do the homework and watch movies'}
  // ];

  logout() {
    this.authService.logout();
  }

  
}

import { Component } from '@angular/core';
import { Task } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        name: this.newTask,
        completed: false
      };

      this.tasks.push(newTask);
      this.newTask = '';
    }
  }

  updateStatus(index: number) {
    const taskToUpdate = this.tasks[index];
    if (taskToUpdate) {
      taskToUpdate.completed = !taskToUpdate.completed;
      this.tasks.splice(index, 1, taskToUpdate);
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}

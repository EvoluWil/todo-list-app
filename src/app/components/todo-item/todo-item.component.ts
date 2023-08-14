import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Task = {
  id: number;
  name: string;
  completed: boolean;
};

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task: Task | null = null;
  @Output() remove = new EventEmitter<void>();
  @Output() updateStatus = new EventEmitter<void>();

  onRemove() {
    this.remove.emit();
  }

  onUpdateStatus() {
    this.updateStatus.emit();
  }
}

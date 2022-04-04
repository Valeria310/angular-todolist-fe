import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoItem } from '../todoItem';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
    @Input() todo: ITodoItem = { completed: false, title: '', id: 0 };
    @Output() remove = new EventEmitter<ITodoItem>();
    @Output() complete = new EventEmitter<ITodoItem>();
    @Output() edit = new EventEmitter<ITodoItem>();

    edited = false;

    ngOnInit(): void {
        this.todo.newTitle = this.todo.title;
    }
}

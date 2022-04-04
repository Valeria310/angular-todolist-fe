import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ITodoItem } from '../todoItem';

@Injectable({
  providedIn: 'root',
})
export class EditTodoService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  addItem(todoList: ITodoItem[], title: string) {
    return this.httpClient
      .post<ITodoItem>('https://jsonplaceholder.typicode.com/todos', {
        title: title,
        completed: false,
        id: todoList[todoList.length - 1].id + 1,
      })
      .subscribe((todo) => todoList.unshift(todo));
  }

  removeItem(item: ITodoItem, todoList: ITodoItem[]) {
    return this.httpClient
      .delete<void>('https://jsonplaceholder.typicode.com/todos/' + item.id)
      .subscribe(() => todoList.splice(todoList.indexOf(item), 1));
  }

  completeItem(item: ITodoItem) {
    return this.httpClient.patch<ITodoItem>(
      'https://jsonplaceholder.typicode.com/todos/' + item.id,
      {
        completed: !item.completed,
        title: item.title,
      }
    );
  }

  editItem(item: ITodoItem) {
    return this.httpClient.patch<ITodoItem>(
      'https://jsonplaceholder.typicode.com/todos/' + item.id,
      {
        completed: item.completed,
        title: item.newTitle,
      }
    );
  }
}

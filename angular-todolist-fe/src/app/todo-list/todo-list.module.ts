import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoComponent } from '../todo/todo.component';
import { UpperCasePipePipe } from '../upper-case-pipe.pipe';
import { CompleteDirective } from '../complete.directive';

@NgModule({
    declarations: [
        TodoListComponent,
        TodoComponent,
        UpperCasePipePipe,
        CompleteDirective,
    ],
    imports: [CommonModule],
    exports: [
        TodoListComponent,
        TodoComponent,
        UpperCasePipePipe,
        CompleteDirective,
    ],
})
export class TodoListModule {}

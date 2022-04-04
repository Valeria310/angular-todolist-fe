import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TodoListModule } from './todo-list/todo-list.module';
import { MainModule } from './main/main.module';

import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [AppComponent, MainComponent],
    imports: [BrowserModule, HttpClientModule, TodoListModule, MainModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

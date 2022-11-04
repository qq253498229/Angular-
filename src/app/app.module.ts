import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';

const routes: Routes = [
  { path: '', redirectTo: '/test1', pathMatch: 'full' },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, Test1Component],
  bootstrap: [AppComponent],
})
export class AppModule {}

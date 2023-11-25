import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section2Component } from './section-2/section-2.component';

const routes: Routes = [
  { path: 'section2', component: Section2Component },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

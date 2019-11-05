// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path:'',
    component: BookComponent
  },
  {
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'business',
    component: GstGetComponent
  },
  {
    path: 'business/profiles',
    component: StudentProfileComponent
  },
  {
    path: 'students/add',
    component: StudentAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
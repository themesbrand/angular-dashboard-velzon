import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './student-master/student-create/student-create.component';
import { StudentEditComponent } from './student-master/student-edit/student-edit.component';
import { StudentMasterComponent } from './student-master/student-master.component';
import { StudentComponent } from './student-rr-dashboard/student.component';

// Component pages


const routes: Routes = [
    { path: "", component : StudentComponent },
    { path: "student-master", component : StudentMasterComponent },
    { path: "student-booking", component : StudentComponent },
    { path: "student-checklist", component : StudentComponent },
    { path: "crr-student-registration", component : StudentComponent },
    { path: "student-detail-register", component : StudentComponent },
    { path: "student-create", component : StudentCreateComponent },
    { path: "student-edit", component : StudentEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

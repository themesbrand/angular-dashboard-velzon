import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './registrar_office/student-create/student-create.component';
import { StudentEditComponent } from './registrar_office/student-edit/student-edit.component';
import { StudentComponent } from './dashboard/student.component';
import { RegistrarOfficeComponent } from './registrar_office/registrar-Office-Page/registrar_office.component';

// Component pages


const routes: Routes = [
    { path: "", component : StudentComponent },
    { path: "registrar_office", component : RegistrarOfficeComponent },
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
export class MedicalEducationRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { MenuComponent } from './menu/menu.component';
import { StudentComponent } from './student/student.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'emergency',component:EmergencyContactComponent},
  {path:'fees',component: FeeDetailsComponent},
  {path:'branch',component:BranchDetailsComponent},
  {path:"Ed/:id",component:StudentEditComponent },
  {path:"new",component:StudentNewComponent },
  {path:"list",component:StudentListComponent },
  {path:"detail",component:StudentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { MenuComponent } from './menu/menu.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    EmergencyContactComponent,
    FeeDetailsComponent,
    BranchDetailsComponent,
    MenuComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentNewComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

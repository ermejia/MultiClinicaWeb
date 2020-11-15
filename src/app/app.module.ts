import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../app/Service/data.service';
import { ListComponent } from './Components/Employee/list/list.component';
import { ListPatientComponent } from './Components/Patient/list-patient/list-patient.component';
import { ListMedicineComponent } from './Components/Medicine/list-medicine/list-medicine.component';
import { ListRoomComponent } from './Components/Room/list-room/list-room.component';
import { ListPatientRoomComponent } from './Components/PatientRoom/list-patient-room/list-patient-room.component';
import { CookieService } from 'ngx-cookie-service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddComponent } from './Components/Employee/add/add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EditComponent } from './Components/Employee/edit/edit.component';
import { SliderComponent } from './Components/slider/slider.component';
import { AddMedicineComponent } from './Components/Medicine/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './Components/Medicine/edit-medicine/edit-medicine.component';
import { AddPatientComponent } from './Components/Patient/add-patient/add-patient.component';
import { EditPatientComponent } from './Components/Patient/edit-patient/edit-patient.component';
import { ListClinicComponent } from './Components/Clinic/list-clinic/list-clinic.component';
import { AddClinicComponent } from './Components/Clinic/add-clinic/add-clinic.component';
import { EditClinicComponent } from './Components/Clinic/edit-clinic/edit-clinic.component';
import { ListDoctorsComponent } from './Components/Doctors/list-doctors/list-doctors.component';
import { ListAppintmentComponent } from './Components/Appointment/list-appintment/list-appintment.component';
import { ListHistoryComponent } from './Components/History/list-history/list-history.component';
import { HistoryPatientComponent } from './Components/History/history-patient/history-patient.component';
import { AddAppointmentComponent } from './Components/Appointment/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './Components/Appointment/edit-appointment/edit-appointment.component';
import { EditPatientRoomComponent } from './Components/PatientRoom/edit-patient-room/edit-patient-room.component';
import { AddPatientRoomComponent } from './Components/PatientRoom/add-patient-room/add-patient-room.component';
import { AddRoomComponent } from './Components/Room/add-room/add-room.component';
import { EditRoomComponent } from './Components/Room/edit-room/edit-room.component';
import { AddDiagnosticComponent } from './Components/Diagnostic/add-diagnostic/add-diagnostic.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListPatientComponent,
    ListMedicineComponent,
    ListRoomComponent,
    ListPatientRoomComponent,
    AddComponent,
    EditComponent,
    SliderComponent,
    AddMedicineComponent,
    EditMedicineComponent,
    AddPatientComponent,
    EditPatientComponent,
    ListClinicComponent,
    AddClinicComponent,
    EditClinicComponent,
    ListDoctorsComponent,
    ListAppintmentComponent,
    ListHistoryComponent,
    HistoryPatientComponent,
    AddAppointmentComponent,
    EditAppointmentComponent,
    EditPatientRoomComponent,
    AddPatientRoomComponent,
    AddRoomComponent,
    EditRoomComponent,
    AddDiagnosticComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    DataService,
    CookieService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

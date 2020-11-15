import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAppointmentComponent } from './Components/Appointment/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './Components/Appointment/edit-appointment/edit-appointment.component';
import { ListAppintmentComponent } from './Components/Appointment/list-appintment/list-appintment.component';
import { AddClinicComponent } from './Components/Clinic/add-clinic/add-clinic.component';
import { EditClinicComponent } from './Components/Clinic/edit-clinic/edit-clinic.component';
import { ListClinicComponent } from './Components/Clinic/list-clinic/list-clinic.component';
import { AddDiagnosticComponent } from './Components/Diagnostic/add-diagnostic/add-diagnostic.component';
import { ListDoctorsComponent } from './Components/Doctors/list-doctors/list-doctors.component';
import { AddComponent } from './Components/Employee/add/add.component';
import { EditComponent } from './Components/Employee/edit/edit.component';
import { ListComponent } from './Components/Employee/list/list.component';
import { HistoryPatientComponent } from './Components/History/history-patient/history-patient.component';
import { ListHistoryComponent } from './Components/History/list-history/list-history.component';
import { AddMedicineComponent } from './Components/Medicine/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './Components/Medicine/edit-medicine/edit-medicine.component';
import { ListMedicineComponent } from './Components/Medicine/list-medicine/list-medicine.component';
import { AddPatientComponent } from './Components/Patient/add-patient/add-patient.component';
import { EditPatientComponent } from './Components/Patient/edit-patient/edit-patient.component';
import { ListPatientComponent } from './Components/Patient/list-patient/list-patient.component';
import { AddPatientRoomComponent } from './Components/PatientRoom/add-patient-room/add-patient-room.component';
import { EditPatientRoomComponent } from './Components/PatientRoom/edit-patient-room/edit-patient-room.component';
import { ListPatientRoomComponent } from './Components/PatientRoom/list-patient-room/list-patient-room.component';
import { AddRoomComponent } from './Components/Room/add-room/add-room.component';
import { EditRoomComponent } from './Components/Room/edit-room/edit-room.component';
import { ListRoomComponent } from './Components/Room/list-room/list-room.component';
import { SliderComponent } from './Components/slider/slider.component';

const routes: Routes = [
  { path: '', component: SliderComponent },
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'listPatient', component: ListPatientComponent },
  { path: 'add-patient', component: AddPatientComponent },
  { path: 'edit-patient/:id', component: EditPatientComponent },
  { path: 'history-patient', component: ListHistoryComponent },
  { path: 'history/:dpi', component: HistoryPatientComponent },
  { path: 'listMedicine', component: ListMedicineComponent },
  { path: 'add-medicine', component: AddMedicineComponent },
  { path: 'edit-medicine/:id', component: EditMedicineComponent },
  { path: 'listRoom', component: ListRoomComponent },
  { path: 'add-room', component: AddRoomComponent },
  { path: 'edit-room/:id', component: EditRoomComponent },
  { path: 'listPatientRoom', component: ListPatientRoomComponent },
  { path: 'add-patient-room', component: AddPatientRoomComponent },
  { path: 'edit-patient-room/:id', component: EditPatientRoomComponent },
  { path: 'listClinics', component: ListClinicComponent },
  { path: 'add-clinic', component: AddClinicComponent },
  { path: 'edit-clinic/:id', component: EditClinicComponent },
  { path: 'listDoctors', component: ListDoctorsComponent },
  { path: 'listAppointments', component: ListAppintmentComponent },
  { path: 'add-appoint', component: AddAppointmentComponent },
  { path: 'edit-appoint/:id', component: EditAppointmentComponent },
  { path: 'addDiagnostic', component: AddDiagnosticComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateServiceService {
  baseUrl = 'http://52.186.140.66:8080/ClinicaWeb-1.0-SNAPSHOT';
  urlUpdateEmployee = '/updateEmployee';
  urlUpdateMedicine = '/updateMedicine';
  urlUpdatePatient = '/updatePatient';
  urlUpdateClinic = '/updateClinic';
  urlUpdateAppoint = '/updateAppointment';
  urlPatientRoom = '/updatePatientRoom';
  urlRoom = '/updateRoom';

  constructor(private http: HttpClient) {}

  updateEmployee(employee: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlUpdateEmployee}`, employee);
  }
  updateMedicine(medicine: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlUpdateMedicine}`, medicine);
  }
  updatePatient(patient: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlUpdatePatient}`, patient);
  }
  updateClinic(clinic: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlUpdateClinic}`, clinic);
  }
  updateAppoint(appoint: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlUpdateAppoint}`, appoint);
  }
  updatePatientRoom(patientRoom: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlPatientRoom}`, patientRoom);
  }
  updateRoom(room: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlRoom}`, room);
  }
}

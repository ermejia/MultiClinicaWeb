import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root',
})
export class SaveDataService {
  baseUrl = 'http://52.186.140.66:8080/ClinicaWeb-1.0-SNAPSHOT';
  urlEmployee = '/EmployeeServlets';
  urlMedicine = '/crudmedicines';
  urlPatient = '/crudPatients';
  urlClinic = '/crudClinics';
  urlAppoint = '/crudAppointments';
  urlPatientRoom = '/crudPatientRooms';
  urlRoom = '/crudRooms';
  urlDiagnostic = '/crudDiagnostic';

  constructor(private http: HttpClient) {}

  createEmployee(employee: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlEmployee}`, employee);
  }

  createMedicine(medicine: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlMedicine}`, medicine);
  }

  createPatient(patient: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlPatient}`, patient);
  }

  createClinic(clinic: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlClinic}`, clinic);
  }

  createAppoint(appoint: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlAppoint}`, appoint);
  }

  createPatientRoom(patientRoom: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlPatientRoom}`, patientRoom);
  }

  createRoom(room: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlRoom}`, room);
  }

  createDiagnostic(diagnostic: object): Observable<object> {
    return this.http.post(`${this.baseUrl + this.urlDiagnostic}`, diagnostic);
  }
}

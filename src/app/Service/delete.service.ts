import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  baseUrl = 'http://52.186.140.66:8080/ClinicaWeb-1.0-SNAPSHOT';
  urlEmployee = '/deleteEmployee';
  urlMedicine = '/deleteMedicine';
  urlPatient = '/deletePatient';
  urlClinic = '/deleteClinic';

  constructor(private http: HttpClient) {}

  deleteEmployee(employee: object): Observable<any> {
    return this.http.post(`${this.baseUrl + this.urlEmployee}`, employee);
  }
  deleteMedicine(medicine: object): Observable<any> {
    return this.http.post(`${this.baseUrl + this.urlMedicine}`, medicine);
  }
  deletePatient(patient: object): Observable<any> {
    return this.http.post(`${this.baseUrl + this.urlPatient}`, patient);
  }
  deleteClinic(clinic: object): Observable<any> {
    return this.http.post(`${this.baseUrl + this.urlClinic}`, clinic);
  }
}

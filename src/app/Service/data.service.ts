import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Model/Employee';
import { Patient } from '../Model/Patient';
import { Medicine } from '../Model/Medicine';
import { Room } from '../Model/Room';
import { PatientRoom } from '../Model/PatientRoom';
import { Observable } from 'rxjs';
import { Clinic } from '../Model/Clinic';
import { Doctor } from '../Model/Doctor';
import { Job } from '../Model/Job';
import { Appoint } from '../Model/Appoint';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'http://52.186.140.66:8080/ClinicaWeb-1.0-SNAPSHOT';
  urlEmployee = '/EmployeeServlets';
  urlPatient = '/crudPatients';
  urlMedicine = '/crudmedicines';
  urlRoom = '/crudRooms';
  urlPatientRoom = '/crudPatientRooms';
  urlClinic = '/crudClinics';
  urlDoctor = '/crudDoctors';
  urlJob = '/crudStalls';
  urlAppoint = '/crudAppointments';
  urlEmployeeId = '/getEmployee?id=';
  urlMedicineId = '/getMedicine?id=';
  urlPatientId = '/getPatient?id=';
  urlClinicId = '/getClinic?id=';
  urlAppointId = '/getAppointment?id=';
  urlHistory = '/crudRecords?dpi=';
  urlPatientRoomId = '/getPatientRoom?id=';
  urlRoomId = '/getRoom?id=';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + this.urlEmployee);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get<Employee>(`${this.baseUrl}${this.urlEmployeeId}${id}`);
  }

  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.baseUrl + this.urlMedicine);
  }

  getMedicine(id: number): Observable<any> {
    return this.http.get<Employee>(`${this.baseUrl}${this.urlMedicineId}${id}`);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl + this.urlPatient);
  }

  getPatient(id: number): Observable<any> {
    return this.http.get<Employee>(`${this.baseUrl}${this.urlPatientId}${id}`);
  }

  getClinics(): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(this.baseUrl + this.urlClinic);
  }

  getClinic(id: number): Observable<any> {
    return this.http.get<Clinic>(`${this.baseUrl}${this.urlClinicId}${id}`);
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.baseUrl + this.urlDoctor);
  }

  getJob(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl + this.urlJob);
  }

  getAppoints(): Observable<Appoint[]> {
    return this.http.get<Appoint[]>(this.baseUrl + this.urlAppoint);
  }

  getAppoint(id: number): Observable<any> {
    return this.http.get<Clinic>(`${this.baseUrl}${this.urlAppointId}${id}`);
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl + this.urlRoom);
  }

  getRoom(id: number): Observable<any> {
    return this.http.get<Clinic>(`${this.baseUrl}${this.urlRoomId}${id}`);
  }

  getPatientRooms(): Observable<PatientRoom[]> {
    return this.http.get<PatientRoom[]>(this.baseUrl + this.urlPatientRoom);
  }

  getPatientRoom(id: number): Observable<any> {
    return this.http.get<Clinic>(
      `${this.baseUrl}${this.urlPatientRoomId}${id}`
    );
  }

  getHistory(dpi: number): Observable<any> {
    return this.http.get<Clinic>(`${this.baseUrl}${this.urlHistory}${dpi}`);
  }
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { ConfigService } from '../../shared/utils/config.service';

import { BaseService } from '../../shared/services/base.service';

import { Observable } from 'rxjs/Rx';

// Add the RxJS Observable operators we need in this app.
// import '../../rxjs-operators';
import { InsurancePolicy, Auto, TrafficAccident, InsuranceCompany, Employee } from '../../shared/models/all.models';



@Injectable()

export class DashboardService extends BaseService {

  baseUrl: string = '';

  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  getHomeDetails(): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/dashboard/home", { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }
  getUserDetails(): Observable<Employee> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/employeeinfo/info", { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  getInsurancePolicy(): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/InsurancePolicies", { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  putInsurancePolicy(policy: InsurancePolicy) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    let body = JSON.stringify(policy);
    console.log('Отправка запроса post');
    console.log(body);
    return this.http
      .post(
      this.baseUrl + '/InsurancePolicies/', body, { headers })
      .map(res => res.json())
      .map(res => {
        return res.id;
      })
      .catch(this.handleError);
  }
  putAuto(auto: Auto) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    let body = JSON.stringify(auto);
    console.log('Отправка запроса post');
    console.log(body);
    return this.http
      .post(
      this.baseUrl + '/Autos/', body, { headers })
      .map(res => res.json())
      .map(res => {
        return res.id;
      })
      .catch(this.handleError);
  }

  getEvents(): Observable<TrafficAccident> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/TrafficAccidents/", { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }
  getEvent(): Observable<TrafficAccident> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');

    return this.http.get(this.baseUrl + "/TrafficAccidents/1", { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }
  getInsuranceCompanys(): Observable<InsuranceCompany []> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/InsuranceCompanies/", { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

}

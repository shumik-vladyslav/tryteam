import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {
     
    _apiURI : string;
 
    constructor() {
        this._apiURI = 'https://webserviceolimp.azurewebsites.net/api';
        //this._apiURI = 'http://localhost:56841/api';
     }
 
     getApiURI() {
         return this._apiURI;
     }    
}
 
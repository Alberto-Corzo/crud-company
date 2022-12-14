import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { CompanyModel } from '../models/Empresa.model';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url: string = `${environment.urlApi}/empresa`;
  matricula: string = environment.matricula;
  
  constructor(private readonly http: HttpClient) { }

  getCompanies(){
    return lastValueFrom(this.http.get(`${this.url}`, {params: {matricula: this.matricula}}));
  }
  getCompany(idCompany: string){
    return lastValueFrom(this.http.get(`${this.url}/${idCompany}`, {params: {matricula: this.matricula}}));
  }

  getCompanyByFilter(termino: string){
    return lastValueFrom(this.http.get(`${this.url}`, {params:{matricula: this.matricula, termino: termino}}));
  }

  postCompany(company: CompanyModel){
    return lastValueFrom(this.http.post(`${this.url}`, company, {params: {matricula: this.matricula}}));
  }

  putCompany(company: CompanyModel, idCompany: string){
    return lastValueFrom(this.http.put(`${this.url}/${idCompany}`, company, {params: {matricula: this.matricula}}));
  }
  delCompany(idCompany: any){
    return lastValueFrom(this.http.delete(`${this.url}/${idCompany}`, {params: {matricula: this.matricula}}));
  }

}

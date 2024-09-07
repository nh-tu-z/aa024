import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options);
  }

  public post(url: string, data: any, options?: any) { 
    return this.http.post(url, data, options); 
  } 

  public put(url: string, data: any, options?: any) { 
    return this.http.put(url, data, options); 
  } 

  public delete(url: string, options?: any) { 
    return this.http.delete(url, options); 
  } 
}

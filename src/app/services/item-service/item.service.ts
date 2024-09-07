import { Injectable } from '@angular/core';
import { HttpApiService } from '../http-api/http-api.service';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Item[]> {
    const url = '/assets/items.json'
    return this.http.get<Item[]>(url);
  }

  public getItem(id: string): Observable<Item> {
    // TODO: id will be used to call api
    const url = '/assets/item.json'
    return this.http.get<Item>(url);
  }
}

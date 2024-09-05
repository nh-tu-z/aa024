import { Injectable } from '@angular/core';
import { HttpApiService } from '../http-api/http-api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpApiService: HttpApiService) { }

  public getItems() {
    const url = '/assets/items.json'
    return this.httpApiService.get(url);
  }
}

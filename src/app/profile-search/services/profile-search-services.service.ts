import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifServicesService {

  constructor(private http: HttpClient) { }

  searchGif(name: String){
    return this.http.get(`https://api.github.com/search/users?q=${name}&page=1&per_page=32`);
    
  }
}

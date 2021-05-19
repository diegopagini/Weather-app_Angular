import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = 'e7dd53cf41d5814da241c77fc45a3fbe';
  private url: string =
    'https://api.openweathermap.org/data/2.5/weather?&appid=';

  constructor(private http: HttpClient) {}

  getWeather(ciudad: string): Observable<any> {
    const URL = `${this.url}${this.apiKey}&q=${ciudad}`;
    return this.http.get(URL);
  }
}

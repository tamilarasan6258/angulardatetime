import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // 👈 Automatically available everywhere
})
export class TimeService {
  private API_BASE_URL = 'https://dateandtimewebapi.runasp.net/api/Time/api/time'; // Update API URL if needed

  constructor(private http: HttpClient) {}

  getLocalTime(): Observable<string> {
   
    return this.http.get(this.API_BASE_URL + '/local', { responseType: 'text' });
  }

  getTimeZones(): Observable<string[]> {
    
    return this.http.get<string[]>(this.API_BASE_URL + '/zones');
  }

  getTimeByZone(zoneId: string): Observable<string> {
    return this.http.get(this.API_BASE_URL + '/' + zoneId, { responseType: 'text' });
  }
}

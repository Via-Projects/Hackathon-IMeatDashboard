import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Meat } from '../model/Meat';
import { ScanStatisticsRecord } from '../model/ScanStatisticsRecord';
import axios from 'axios';
import { ConsumerPreferences } from '../model/ConsumerPreferences';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private testData;

  constructor(private http: HttpClient) {}

  public getData(): Observable<Meat> {
    return this.http.get<Meat>('http://localhost:8000');
  }

  public getScansData(): Promise<void | ScanStatisticsRecord[]> {
    return axios
      .get('http://localhost:8000/scanStatistics')
      .then((response) => response.data);
  }

  public getPreferencesData(): Promise<void | ConsumerPreferences[]> {
    return axios
      .get('http://localhost:8000/consumerPreferences')
      .then((response) => response.data);
  }
}

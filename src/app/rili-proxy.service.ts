import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiliProxyService {
  // where to get database data from
  hostUrl:string = 'http://localhost:8080';

  // xml data to grab data from api
  constructor(private httpClient: HttpClient) { }

  events:any=[]

  /*
  methods below to grab content from database
  */
  
  // get all events
  getEvents() {
    return this.httpClient.get<any[]>( this.hostUrl + '/app/rili');
  }

  // get single event
  getEvent(eventID: string) {
    return this.httpClient.get<any[]>( this.hostUrl + '/app/rili/' + eventID);
  }

  // post event data
  post_event(eventData: any) {
    return this.httpClient.post<any>(`${this.hostUrl}/app/rili`, eventData);
  }

  // get events with time
  getDateEvents(value: string) {
    return this.httpClient.get<any[]>( this.hostUrl + '/app/rili/time/' + value)
  }
}

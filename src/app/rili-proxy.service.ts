import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiliProxyService {
  // where to get database data from
  hostUrl:string = 'https://rili.azurewebsites.net';

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

  getImage(){
    return this.httpClient.get<any[]>( this.hostUrl + '/app/rili/getImage');
  }

  // post event data
  // post_event(eventData: any) {
  //   return this.httpClient.post<any>(`${this.hostUrl}/app/rili`, eventData);
  // }

  post_event(eventData: any) {
    return this.httpClient.post<any>( this.hostUrl + '/app/rili/authenticated', eventData);
  }

  // get events with time
  getDateEvents(value: string) {
    return this.httpClient.get<any[]>( this.hostUrl + '/app/rili/authenticated/time/' + value)
  }

  // get givenName 
  getGivenName() {
    return this.httpClient.get<any[]>( this.hostUrl + '/app/rili/getGivenName')
  }

  getEmail() {
    return this.httpClient.get<any[]>( this.hostUrl + '/app/rili/getEmail')
  }

  getUsername() {
    return this.httpClient.get<any[]>( this.hostUrl + '/app/rili/getUsername')
  }
}

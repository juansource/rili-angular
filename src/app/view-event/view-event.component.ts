import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { RiliProxyService } from '../rili-proxy.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrl: './view-event.component.css',
})

export class ViewEventComponent {
  riliEventID: string = "";
  name: string = "";
  description: string = "";
  location: string = "";
  range_start: Date = new Date();;
  range_end: Date = new Date();

  readable_date_start: string = "";
  readable_date_end: string = "";

  readable_time_start: string = "";
  readable_time_end: string = "";

  
  constructor(private route: ActivatedRoute, proxy$: RiliProxyService) {
    this.riliEventID = route.snapshot.params['id'];

    proxy$.getEvent(this.riliEventID).subscribe((result: any) => {
      console.log(result);
      this.name = result[0].name;
      this.description = result[0].description;
      this.location = result[0].location;
      this.range_start = new Date(result[0].rangeStart);
      this.range_end = new Date(result[0].rangeEnd);


      const timeOptions: Intl.DateTimeFormatOptions = {hour: 'numeric', minute: 'numeric', hour12: true};
      const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

      this.readable_date_start = this.range_start.toLocaleString('en-US', dateOptions);
      this.readable_date_end = this.range_end.toLocaleString('en-US', dateOptions);

      console.log(this.readable_time_start + "testing");

      this.readable_time_start = this.range_start.toLocaleString('en-US', timeOptions);
      this.readable_time_end = this.range_end.toLocaleString('en-US', timeOptions);

    });

    console.log("retrieved data from server.");
    console.log(this.riliEventID);
  }
}


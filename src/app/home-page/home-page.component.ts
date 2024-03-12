import {Component, OnInit} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { RiliProxyService } from '../rili-proxy.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router} from '@angular/router';

@Component({
  selector: 'home-page.component',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers: [provideNativeDateAdapter()],
})
export class HomePageComponent implements OnInit {
  selected: string | null = null;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['event', 'location', 'description', 'time'];
  givenName: String = "";

  constructor(private router: Router, private proxy$: RiliProxyService) {
  }

  ngOnInit(){

    const todaysDate = new Date();
    const todaysDateToString = todaysDate.toLocaleString();    
    this.getName();
    // this.fetchEvents(todaysDateToString);
  }

  fetchEvents(date: string) {
    this.proxy$.getDateEvents(date).subscribe( (result: any[]) => 
    {
      this.dataSource = new MatTableDataSource<any>(result);
      console.log("Retriving Data From Server for " + date);
      console.log(this.dataSource.filteredData);
    });
  }

  getName() {
    this.proxy$.getGivenName().subscribe( (result: any[]) => 
    {
      this.givenName =  new String(result);
      console.log("running trhrough here");
      console.log(this.givenName);
    });
  }


}
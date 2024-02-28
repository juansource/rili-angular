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
  displayedColumns: string[] = ['event', 'location', 'description'];

  constructor(private router: Router, private proxy$: RiliProxyService) {}

  ngOnInit(){
    this.fetchEvents(new Date().toISOString().split('T')[0] + "GMT-0800 (Pacific Standard Time)");
  }

  fetchEvents(date: string) {
    this.proxy$.getDateEvents(date).subscribe( (result: any[]) => 
    {
      this.dataSource = new MatTableDataSource<any>(result);
      console.log("retrieved data from server.");
      console.log(this.dataSource.filteredData);
    });
  }

}
import { Component } from '@angular/core';
import {dataModel} from './dataModel';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'; 
import { RiliProxyService } from '../rili-proxy.service';

@Component({
  selector: 'app-send-event',
  templateUrl: './send-event.component.html',
  styleUrl: './send-event.component.css',
  
})
export class SendEventComponent {

  constructor(private e:FormBuilder, private riliService:RiliProxyService, private router: Router){}

  eventForm = this.e.group({
   name : ['test name'],
   start_time : ['x time start'],
   end_time : ['y time end'],
   start_date : ['x date start'],
   end_date : ['y date end'],
   description : ['description test'],
   location : ['location test']
  })

  dataModel = new dataModel("","","","","","","");


  new_event = new FormGroup({
    name: new FormControl(''),
    start_time: new FormControl(''),
    end_time: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl(''),

    rangeStart: new FormControl(''),
    rangeEnd: new FormControl(''),

    description: new FormControl(''),
    location: new FormControl('')

  });
  

  onSubmit(){
    const userReadableDateStart = this.new_event.value.start_date + ' ' + this.new_event.value.start_time;
    const userReadableDateEnd = this.new_event.value.end_date + ' ' + this.new_event.value.end_time;

    const dateStartObject = new Date(userReadableDateStart);
    const isoStartString = dateStartObject.toISOString();

    const dateEndObject = new Date(userReadableDateEnd);
    const isoEndString = dateEndObject.toISOString();

    this.new_event.patchValue({ rangeStart: isoStartString, rangeEnd: isoEndString});

    console.log("Adding Event Successful")
    // console.log(this.new_event.value);
    this.riliService.post_event(this.new_event.value).subscribe(() =>{
      this.router.navigate(['/home']);
    // response => console.log('success!',response),
    // error => console.log('error!',error)
    });
  }
}
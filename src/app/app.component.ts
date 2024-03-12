import { Component, OnInit } from '@angular/core';
import { RiliProxyService } from './rili-proxy.service';
import { FormGroup } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'rili-angular';
  image: String = "https://i.imgur.com/xCvzudW.png";

  constructor(private router: Router, private proxy$: RiliProxyService) {
  }

  ngOnInit(){   
    this.returnUser();
  }

  returnUser() {
    this.proxy$.getImage().subscribe((result: any) => {
      if (result && result.length > 0) {
        this.image = result;
      } else {
        this.image = "https://i.imgur.com/xCvzudW.png";
      }
      console.log(this.image);
    });
  }
}

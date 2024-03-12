import { Component, OnInit  } from '@angular/core';
import { RiliProxyService } from '../rili-proxy.service';

interface User {
  name: String;
  username: String;
  email: String;
  image: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  user: User = {
    name: '',
    username: '',
    email: '',
    image: ''
  };

  constructor(private proxy$: RiliProxyService) { }

  ngOnInit() {
    this.getName();
    this.returnImage();
    this.getMail();
    this.getUser();
  }

  returnImage() {
    this.proxy$.getImage().subscribe((result: any) => {
      if (result && result.length > 0) {
        this.user.image = result;
      } else {
        this.user.image = "https://i.imgur.com/xCvzudW.png";
      }
      console.log(this.user.image);
    });
  }

  getName() {
    this.proxy$.getGivenName().subscribe( (result: any[]) => 
    {
      this.user.name =  new String(result);
      console.log("running trhrough here");
      console.log(this.user.name);
    });
  }

  getUser() {
    this.proxy$.getUsername().subscribe( (result: any[]) => 
    {
      this.user.username =  new String(result);
      console.log("running trhrough here");
      console.log(this.user.username);
    });
  }

  getMail() {
    this.proxy$.getEmail().subscribe( (result: any[]) => 
    {
      this.user.email =  new String(result);
      console.log("running trhrough here");
      console.log(this.user.email);
    });
  }
}
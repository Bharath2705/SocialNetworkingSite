import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PrimaryKeyServiceService } from '../primary-key-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  primaryKey:string="";
  emailId:string;
  name:string;
  ProfilePicture:string;
  address:string;
  dob:any;
  constructor( private http: HttpClient , private router: Router , private primaryKeyService: PrimaryKeyServiceService ) {
   }

  ngOnInit() {
    this.primaryKey = this.primaryKeyService.getPrimaryKey();
    this.emailId = this.primaryKeyService.getEmailId();
    let obs = this.http.get('http://localhost:3000/person/specificUserInfo/' + this.emailId);
    obs.subscribe((data: any) => {
        this.name = data.userModel.name;
        this.address = data.userModel.address;
        this.dob = data.dateOfBirth;
        if (data.userModel.personPic != null) {
          if (data.userModel.personPic.endsWith('.jpeg') || data.userModel.personPic.endsWith('.JPG') || data.userModel.personPic.endsWith('.jpg') || data.userModel.personPic.endsWith('.png') || data.userModel.personPic.endsWith('.PNG')) {
            console.log('Image ...' + 'http://localhost:3000/uploads/' + data.userModel.personPic);
            this.ProfilePicture = 'http://localhost:3000/uploads/' + data.userModel.personPic;
          } else {
            this.ProfilePicture = 'http://localhost:3000/uploads/default.jpeg';
          }
        }

      });


  }

}

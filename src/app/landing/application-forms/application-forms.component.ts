import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {userDetails} from 'src/app/landing/application-forms/data';

@Component({
  selector: 'app-application-forms',
  templateUrl: './application-forms.component.html',
  styleUrls: ['./application-forms.component.scss']
})
export class ApplicationFormsComponent implements OnInit {

  userDetails: any = userDetails;

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

  onNavigate(url: any) {
    this.router.navigateByUrl(url)
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-forms',
  templateUrl: './application-forms.component.html',
  styleUrls: ['./application-forms.component.scss']
})
export class ApplicationFormsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }


  onNavigate(type : any) {
    switch (type) {
        case 'Residency Program' : {
            this.router.navigateByUrl('/home/application-forms/residency-program')
            break;
        }
        default : {
            break;
        }
    }
}
}

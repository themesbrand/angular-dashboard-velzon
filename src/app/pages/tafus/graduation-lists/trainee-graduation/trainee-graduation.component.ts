import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainee-graduation',
  templateUrl: './trainee-graduation.component.html',
  styleUrls: ['./trainee-graduation.component.scss']
})
export class TraineeGraduationComponent implements OnInit {
  userRole: string | null = null;
  files: File[] = [];

  constructor() { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');

  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesBLSCertificate' : {
        this.files.splice(this.files.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'files' : {
        this.files.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}

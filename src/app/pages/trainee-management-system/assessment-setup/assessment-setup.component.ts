import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment-setup',
  templateUrl: './assessment-setup.component.html',
  styleUrls: ['./assessment-setup.component.scss']
})
export class AssessmentSetupComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  formSpecific : any = null;
  isApplicableFor : boolean = false;
  
  userRole: string | null = null;

  constructor(
    private router : Router,
    private modalService : NgbModal
   ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Trainee Management System", link: '/trainee-management-system'},
      { label: "Assessment Setup ", active : true }
    ];
    this.userRole = localStorage.getItem('userType');
  }

  onChangeSpecific() {
    if(this.formSpecific === 'Program Specific' ) {
      this.isApplicableFor = true
    } else {
      this.isApplicableFor = false
    } 
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

}

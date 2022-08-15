import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-verify-certification',
  templateUrl: './verify-certification.component.html',
  styleUrls: ['./verify-certification.component.scss']
})
export class VerifyCertificationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  
  isLoading : boolean = false;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Verification", link: '/vehpc/verification'},
      { label: "Verify Certificates & Profile Info", active : true }
    ];
  }

  onSubmit(){
    this.isLoading = true
    setTimeout(()=> {
      this.isLoading = false
      this.router.navigateByUrl('/vehpc/verification/verify-certificate-two')
    },1500)
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}

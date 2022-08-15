import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-verify-certification-two',
  templateUrl: './verify-certification-two.component.html',
  styleUrls: ['./verify-certification-two.component.scss']
})
export class VerifyCertificationTwoComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  constructor(    private router : Router,
    private modalService : NgbModal) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Verification", link: '/vehpc/verification'},
      { label: "Fetch Certificates", link: '/vehpc/verification/verify-certificate'},
      { label: "Verify Certificates & Profile Info", active : true }
    ];
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-unmatched-verifications',
  templateUrl: './view-unmatched-verifications.component.html',
  styleUrls: ['./view-unmatched-verifications.component.scss'],
})
export class ViewUnmatchedVerificationsComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  isSearch: boolean = false;
  isLoading: boolean = false;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Verification", link: '/vehpc/verification'},
      { label: "View Unmatched Verification", active : true }
    ];
  }

  onSearch(){
    this.isLoading = true
    setTimeout(()=> {
      this.isLoading = false
      this.isSearch = true;
    },1500)
  }

  addToProfile(){
    this.isLoading = true
    setTimeout(()=> {
      this.isLoading = false
      this.isSearch = true;
    },1500)
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}

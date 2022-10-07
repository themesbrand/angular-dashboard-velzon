import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { data } from './data';

@Component({
  selector: 'app-ec-add-members',
  templateUrl: './ec-add-members.component.html',
  styleUrls: ['./ec-add-members.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class EcAddMembersComponent implements OnInit {

  userRole: string | null = null;

  listData = data;

  selectedUser :any =  'Chairman / PD / PA';

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  selectedRequest: any;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');

    this.breadCrumbItems = [
      { label: "Education Committee", link: '/education-committee'},
      { label: "EC Add Members", active : true }
    ];
  }

  setRequest(request: any) {
    console.log(request)
    this.selectedRequest = request
  }
  
  
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onChangeUser(event : any) {
    if(event === 'PD') {

    }
  }


  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}

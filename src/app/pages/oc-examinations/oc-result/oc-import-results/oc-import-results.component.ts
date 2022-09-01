import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { animate, style, transition, trigger } from '@angular/animations';

import {data} from './data';

@Component({
  selector: 'app-oc-import-results',
  templateUrl: './oc-import-results.component.html',
  styleUrls: ['./oc-import-results.component.scss'],
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
  ]
})
export class OcImportResultsComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;
  isSearched: boolean = false;
  isLoading: boolean = false;
  
  listData = data;

  userRole: string | null = null;
  appealResponseStatus: any;
  filesSupportingDocuments: any[]= [];

  constructor(
    private router : Router,
    private modalService : NgbModal,
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Results", link: '/oc-examinations/results'},
      { label: "Import Result", active : true }
    ];

    this.userRole = localStorage.getItem('userType');

  }

  setAppealResponse(appealResponse : any) {
    this.appealResponseStatus = appealResponse
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

  onUploadFiles() {

    this.isLoading = true
    setTimeout(()=> {
      this.isSearched = true;
      this.modalService.dismissAll()
      this.isLoading = false

    },1500)
  }
  
  clearAll() {
    this.isLoading = true
    setTimeout(()=> {
      this.isSearched = false;
      this.isLoading = false

    },1500)
  }

  importFiles(){
    this.isLoading = true
    setTimeout(()=> {
      this.listData.tableData.forEach(element => {
        element.importStatus = 'Imported'
      })
      this.listData.tableData[3].importStatus = 'Error'
      this.isLoading = false

    },1500)

  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesSupportingDocuments' : {
        this.filesSupportingDocuments.splice(this.filesSupportingDocuments.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'filesSupportingDocuments' : {
        this.filesSupportingDocuments.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }
}

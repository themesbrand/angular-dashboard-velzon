import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/internal/Observable';

import {ListJsModel} from './listjs.model';
import { OrdersService } from './listjs.service';
import { ListJs } from './data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-master',
  templateUrl: './student-master.component.html',
  styleUrls: ['./student-master.component.scss']
})
export class StudentMasterComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  
  statData: any;
  submitted = false;

  ListJsData!: ListJsModel[];
  checkedList:any;
  masterSelected!:boolean;

  ListJsList$!: Observable<ListJsModel[]>;
  total$: Observable<number>;


  constructor(public translate: TranslateService,
    private router : Router,
    private modalService: NgbModal,public service: OrdersService, private formBuilder: FormBuilder) {
    translate.setDefaultLang('en');
    this.ListJsList$ = service.countries$;
    this.total$ = service.total$;
  }


  ngOnInit(): void {
  /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Student RR' },
      { label: 'Student Master', active: true }
    ];

    /**
   * fetches data
   */
    this._fetchData();

  }

  /**
  * User grid data fetches
  */
  private _fetchData() {
  this.ListJsData = ListJs;
}

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.ListJsData.length; i++) {
      this.ListJsData[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.ListJsData.length; i++) {
      if(this.ListJsData[i].isSelected)
      this.checkedList.push(this.ListJsData[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

  /**
   * Open modal
   * @param content modal content
   */
   openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }

   /**
   * Confirmation mail model
   */
    confirm() {
      Swal.fire({
        title: 'Are you Sure ?',
        text: 'Are you Sure You want to Remove this Record ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f46a6a',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Close'
      }).then(result => {
        if (result.value) {
          Swal.fire('Deleted!', 'ListJs has been deleted.', 'success');
        }
      });
    }

  //Navigation 

  routeToEdit(data : any) {
    this.router.navigateByUrl('/student-rr/student-edit', { state: data })
  }

  navigateToStudentCreate() {
    this.router.navigateByUrl('/student-rr/student-create')
  }

}

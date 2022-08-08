import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from './data';

@Component({
  selector: 'app-meeting-view',
  templateUrl: './meeting-view.component.html',
  styleUrls: ['./meeting-view.component.scss']
})
export class MeetingViewComponent implements OnInit {

  listData = data;
  currentData = new Date();
  public Editor = ClassicEditor;

  breadCrumbItems!: Array<{}>;

  meeting: any;
  selectedActionItems: any;

  actionSupportingFiles : File[] = []
  feedbackFiles : File[] = []

  @ViewChild('actionItemsGrid') actionItemsGrid !: TemplateRef<any>;

  actionItemForm !: FormGroup;
  followupForm !: FormGroup;
  feedbackForm !: FormGroup;
  
  selectedAgendaIndex: any;
  selectedActionItemIndex: any;
  selectedAgenda: any;

  isViewOnly: boolean = false;
  returnUrl: any;
  isResponse: any;
  filesResponseFiles: any;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    
    this.meeting = history.state.meetingObject
    this.isViewOnly = history.state.isViewOnly
    this.returnUrl = history.state.returnUrl
    this.isResponse  = history.state?.isResponse 
    console.log(history.state)
    console.log(this.returnUrl)
      // For Testing Purpose Only ***********************
      // this.meeting = this.listData.meetingObject
      // this.isViewOnly = true
   
    this.breadCrumbItems = [
      { label: "Meeting Grid View", link : '/meeting-management/view-meetings'},
      { label: "Meeting", active : true }
    ];
    this.actionItemInit();
    this.followupFormInit();
    this.feedbackFormInit();
  }
  
  feedbackFormInit() {
    this.feedbackForm = this.formBuilder.group({
      content : new FormControl(null)
    })
  }

  actionItemInit() {
    this.actionItemForm = this.formBuilder.group({
      actionItemDescription : new FormControl(null),
      assignedTo : new FormControl(null),
      expectedClosureDate : new FormControl(null)
    })
  }

  followupFormInit() {
    this.followupForm = this.formBuilder.group({
      content : new FormControl(null)
    })
  }

  selectActionItems(actionItems : any, index : any) {
    this.selectedActionItems = actionItems
    this.selectedAgendaIndex = index
  }
  setActionItemIndex(i : any) {
    this.selectedActionItemIndex = i
  }

  setAgenda(agenda : any) {
    this.selectedAgenda = agenda
  }

  onSaveActionItem() {
    if(this.meeting.agendas[this.selectedAgendaIndex]?.actionItems === undefined) {
      this.meeting.agendas[this.selectedAgendaIndex].actionItems = [this.actionItemForm.value]
      this.selectedActionItems = this.meeting.agendas[this.selectedAgendaIndex].actionItems
    } else {
      this.meeting.agendas[this.selectedAgendaIndex]?.actionItems.push(this.actionItemForm.value)   
    }

    this.actionItemForm.reset(); 
    this.openModal(this.actionItemsGrid, 'lg');
  }

  onSaveFollowup() {
    if(this.meeting.agendas[this.selectedAgendaIndex]?.actionItems[this.selectedActionItemIndex]?.followups === undefined) {
      this.meeting.agendas[this.selectedAgendaIndex].actionItems[this.selectedActionItemIndex].followups = [this.followupForm.value];
    } else {
      this.meeting.agendas[this.selectedAgendaIndex]?.actionItems[this.selectedActionItemIndex]?.followups.push(this.followupForm.value);
    }

    this.followupForm.reset()
    this.openModal(this.actionItemsGrid, 'lg');

  }

  onSaveFeedback() {
    if(this.meeting.agendas[this.selectedAgendaIndex]?.actionItems[this.selectedActionItemIndex]?.feedbacks === undefined) {
      this.meeting.agendas[this.selectedAgendaIndex].actionItems[this.selectedActionItemIndex].feedbacks = [this.feedbackForm.value];
    } else {
      this.meeting.agendas[this.selectedAgendaIndex]?.actionItems[this.selectedActionItemIndex]?.feedbacks.push(this.feedbackForm.value);
    }

    this.feedbackForm.reset()
    this.openModal(this.actionItemsGrid, 'lg');

  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'actionSupportingFiles' : {
        this.actionSupportingFiles.splice(this.actionSupportingFiles.indexOf(event), 1);
        return
      }
      case 'feedbackFiles' : {
        this.feedbackFiles.splice(this.feedbackFiles.indexOf(event), 1);
        return
      }
      
      case 'filesResponseFiles' : {
        this.filesResponseFiles.splice(this.filesResponseFiles.indexOf(event), 1);
        return
      }
      
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'actionSupportingFiles' : {
        this.actionSupportingFiles.push(...event.addedFiles);
        return
      }
      case 'feedbackFiles' : {
        this.feedbackFiles.push(...event.addedFiles);
        return
      }
      case 'filesResponseFiles' : {
        this.filesResponseFiles.push(...event.addedFiles);
        return
      }
      
      default : {
        break;
      }
    }
  }

  get getCurrentDate() {
    return new Date();
  }


  openModal(modal : any, size : any) {
    this.modalService.open(modal, { size : size })
  }

  closeModals() {
    this.modalService.dismissAll()
  }

}

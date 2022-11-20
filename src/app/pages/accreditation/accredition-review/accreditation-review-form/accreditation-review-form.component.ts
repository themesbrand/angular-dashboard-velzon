import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from '../data';

@Component({
  selector: 'app-accreditation-review-form',
  templateUrl: './accreditation-review-form.component.html',
  styleUrls: ['./accreditation-review-form.component.scss']
})
export class AccreditationReviewFormComponent implements OnInit {

  @Input() formData : any= null

  listData = data;

  files: any[] = []

  committeeList : any[] = []

  committeeNames : any[] = ['Education Committee', 'Curriculum Committee', 'Program Evaluation Committee', 'Career Advisor']

  isTeamMemberAddView: boolean = false
  isTeamMemberSearch: boolean = false

  facultySurvey: any[] = []
  residentSurvey: any[] = []
  residentSurveyTrainingSite: any[] = []

  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {

  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

  //Review Pending
  viewTeamMemberForm() {
    this.isTeamMemberAddView = true;
  }

  onSearch() {
    this.isTeamMemberSearch = true;
  }
  
  addMember() {
    this.isTeamMemberSearch = false
  }

  onAddMemberToList(member : any, index  : any) {
    this.committeeList.push(member)
    this.listData.userLists.splice(index, 1)
    this.isTeamMemberAddView = false;
    this.isTeamMemberSearch = false;
  }

  onDeleteMember(index : any) {
    this.committeeList.splice(index, 1)
    console.log(this.committeeList)
  }

  //Survey Team Invitation Sent
  onRemove(event : any, type: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelect(event : any, type: any) {
    this.files.push(...event.addedFiles);
  }

  //Assigned to Survey Team
  addFacultySurvey(){
    const object = {
      name : '',
      evaluation : ''
    }
    this.facultySurvey.push(object)
  }

  onDeleteFacultySurvey(i: any) {
    this.facultySurvey.splice(i, 1)
  }

  addResidentSurvey(){
    const object = {
      name : '',
      evaluation : ''
    }
    this.residentSurvey.push(object)
  }

  onDeleteResidentSurvey(i: any) {
    this.residentSurvey.splice(i, 1)
  }

  addResidentSurveyTrainingSite(){
    const object = {
      name : '',
      evaluation : ''
    }
    this.residentSurveyTrainingSite.push(object)
  }

  onDeleteResidentSurveyTrainingSite(i: any) {
    this.residentSurveyTrainingSite.splice(i, 1)
  }

}

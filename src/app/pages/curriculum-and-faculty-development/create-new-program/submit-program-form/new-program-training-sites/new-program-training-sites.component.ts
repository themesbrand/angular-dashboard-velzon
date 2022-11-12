import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-new-program-training-sites',
  templateUrl: './new-program-training-sites.component.html',
  styleUrls: ['./new-program-training-sites.component.scss']
})
export class NewProgramTrainingSitesComponent implements OnInit {

  committeeList : any[] = []
  membersList : any[] = [
    {
      name : 'Saleh Mahfoudh',
      email : 'Saleh@email.com',
      telephone : '+96868431321'
    },
    {
      name : 'Al Abri Ibraham',
      email : 'Ibraham@email.com',
      telephone : '+968218313212'
    },
    {
      name : 'Hilal Basheer',
      email : 'Basheer@email.com',
      telephone : '+96832184651'
    },
    {
      name : 'Faisal Gawas',
      email : 'Gawas@email.com',
      telephone : '+96898765321'
    },
  ]  

  committeeNames : any[] = ['Al Nahdah Hospital', 'Armed Forces Hospital', 'Khoula Hospital', 'Royal Hospital', 'Sultan Qaboos University Hospital']
  
  @Output() committeeListObject = new EventEmitter<any>();
  @Input() _committeeListObject : any[] = []

  isTeamMemberAddView: boolean = false
  isTeamMemberSearch: boolean = false

  constructor() { }

  ngOnInit(): void {
    if(this._committeeListObject.length !== 0) {
      this.committeeList = this._committeeListObject
    }
  }
  
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
    this.membersList.splice(index, 1)
    this.isTeamMemberAddView = false;
    this.isTeamMemberSearch = false;
    this.committeeListObject.next(this.committeeList)
  }

  onLoad() {
    console.log('Testing')
  }

  onDeleteMember(index : any) {
    this.committeeList.splice(index, 1)
    console.log(this.committeeList)
  }

}

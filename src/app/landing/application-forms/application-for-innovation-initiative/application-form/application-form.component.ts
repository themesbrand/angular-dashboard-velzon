import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  applicationForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.applicationFormInit();
  }

  applicationFormInit() {
    this.applicationForm = this.formBuilder.group({
      teamMembersArray : new FormArray([]),
      planArray : new FormArray([])
    })
    this.addTeamMembersArray();
    this.addPlanArray();
  }
  
  get applicationFormValues() {
    return this.applicationForm.value
  }

  get teamMembersControls() {
    return (<FormArray>this.applicationForm.get('teamMembersArray')).controls;
  }
  get planControls() {
    return (<FormArray>this.applicationForm.get('planArray')).controls;
  }

  addTeamMembersArray() {
    (<FormArray>this.applicationForm.get('teamMembersArray')).push(
      new FormGroup({
        name : new FormControl('', []),
        designation : new FormControl('', []),
        email : new FormControl('', []),
        phone : new FormControl('', []),
      })
    );
  }
  addPlanArray() {
    (<FormArray>this.applicationForm.get('planArray')).push(
      new FormGroup({
        task : new FormControl('', []),
      })
    );
  }
  onDeleteTeamMembersArray(index : number) {
    if((<FormArray>this.applicationForm.get('teamMembersArray')).length != 1) {
      (<FormArray>this.applicationForm.get('teamMembersArray')).removeAt(index);
    }
  }
  onDeletePlanArray(index : number) {
    if((<FormArray>this.applicationForm.get('planArray')).length != 1) {
      (<FormArray>this.applicationForm.get('planArray')).removeAt(index);
    }
  }

}

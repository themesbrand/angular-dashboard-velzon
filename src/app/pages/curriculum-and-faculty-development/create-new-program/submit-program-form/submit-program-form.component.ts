import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-program-form',
  templateUrl: './submit-program-form.component.html',
  styleUrls: ['./submit-program-form.component.scss']
})
export class SubmitProgramFormComponent implements OnInit {

  formNumber : number = 1;

  programForm : any = null;  
  committeeListMain : any[] = []

  constructor() { }

  ngOnInit(): void {
  }


  nextStep() {
    this.formNumber = (this.formNumber + 1)
    console.log(this.programForm)
  }

  previousStep() {
    this.formNumber = (this.formNumber - 1)
  }

  onChangeFormValues(event: any) {
    console.log(event)
    this.programForm = event
  }
  
  onChangeCommitteeList(event: any) {
    console.log(event)
    this.committeeListMain = event
  }


}

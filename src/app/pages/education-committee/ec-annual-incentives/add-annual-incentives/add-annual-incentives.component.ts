import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-annual-incentives',
  templateUrl: './add-annual-incentives.component.html',
  styleUrls: ['./add-annual-incentives.component.scss']
})
export class AddAnnualIncentivesComponent implements OnInit {

  requestForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.requestForm = this.formBuilder.group({
      name : new FormControl('Dr. Khalid Ali Al Zadjali', []),
      startDate : new FormControl('2019-05-01', []),
      position : new FormControl('EC-Chairman', []),
      absencePeriod : new FormArray([]),
      numberOfWorkingDays : new FormControl(null, []),
      numberOfAbsenceDays : new FormControl(null, []),
    }) 
    this.addAbsencePeriodArray();
  }

  get formValues() {
    return this.requestForm.value;
  }

  get absencePeriodControls() {
    return (<FormArray>this.requestForm.get('absencePeriod')).controls;
  }

  addAbsencePeriodArray() {
    (<FormArray>this.requestForm.get('absencePeriod')).push(
      new FormGroup({
        fromDate : new FormControl(null, []),
        toDate : new FormControl(null, [])
      })
    );
  }
  onDeleteAbsencePeriodArray(index : number) {
    if((<FormArray>this.requestForm.get('absencePeriod')).length != 1) {
      (<FormArray>this.requestForm.get('absencePeriod')).removeAt(index);
    }
  }



}

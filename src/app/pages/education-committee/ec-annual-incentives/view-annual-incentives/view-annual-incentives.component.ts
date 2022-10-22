import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-annual-incentives',
  templateUrl: './view-annual-incentives.component.html',
  styleUrls: ['./view-annual-incentives.component.scss']
})
export class ViewAnnualIncentivesComponent implements OnInit {

  @Input() formRequest : any = null;
  @Input() isEditable : any = false;
  @Input() isSubmit : any = false;

  requestForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.requestForm.patchValue(this.formRequest);
  }

  formInit() {
    this.requestForm = this.formBuilder.group({
      name : new FormControl('Dr. Khalid Ali Al Zadjali', []),
      startDate : new FormControl('2019-05-01', []),
      position : new FormControl('EC-Chairman', []),
      absencePeriod : new FormArray([]),
      totalWorkingDays : new FormControl(null, []),
      totalAbsenceDays : new FormControl(null, []),
      incentiveAmount : new FormControl(null, []),
      qararLink : new FormControl(null, []),
    }) 

    if(this.formRequest !== null) {
      console.log(this.formRequest.absencePeriod)

      this.formRequest.absencePeriod.forEach((element : any) => {
        this.updateAbsencePeriodArray(element);
      });
    } else {
      this.addAbsencePeriodArray();
    }
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
        startDate : new FormControl(null, []),
        endDate : new FormControl(null, [])
      })
    );
  }

  updateAbsencePeriodArray(request : any) {
    (<FormArray>this.requestForm.get('absencePeriod')).push(
      new FormGroup({
        fromDate : new FormControl(request.fromDate, []),
        toDate : new FormControl(request.toDate, [])
      })
    );
  }
}

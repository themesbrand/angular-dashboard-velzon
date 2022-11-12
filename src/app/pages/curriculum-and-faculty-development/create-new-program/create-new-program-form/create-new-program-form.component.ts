import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-new-program-form',
  templateUrl: './create-new-program-form.component.html',
  styleUrls: ['./create-new-program-form.component.scss']
})
export class CreateNewProgramFormComponent implements OnInit {

  requestForm !: FormGroup

  hospitalList : any[] =  ['Sultan Qaboos University Hospital', 'Royal Hospital', 'Armed Forces Hospital', 'Khoula Hospital', 'Al Nahdah Hospital', 'Al Massara Hospital', 'Other']
  
  participatingHospitalList : any[] =  ['Sultan Qaboos University Hospital', 'Royal Hospital', 'Armed Forces Hospital', 'Khoula Hospital', 'Al Nahdah Hospital', 'Al Massara Hospital', 'Other']

  isParticipateOther : boolean = false;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.requestForm = this.formBuilder.group({
      trainingProgram : new FormControl(null, []),
      classification : new FormControl(null, []),
      primaryTrainingHospital : new FormControl(null, []),
      participatingSites : new FormControl(null, []),
      applicantEligibility : new FormControl(null, []),
    })

    this.onSubscribe();
  }

  get formValues () {
    return this.requestForm.value
  }

  onSubscribe() {
    this.requestForm.valueChanges.subscribe(res => {
      console.log(res)
      if(this.formValues.primaryTrainingHospital !== null) {
        this.participatingHospitalList = [...this.hospitalList]
        this.requestForm.get('participatingSites')?.patchValue(null)
      }
      if(this.formValues.primaryTrainingHospital !== 'Other') {
        this.participatingHospitalList.forEach((element, index) => {
          if(element === this.formValues.primaryTrainingHospital) {
            console.log(element)
            this.participatingHospitalList.splice(index, 1)
          }
        });
      }
      this.participatingHospitalList = [...this.participatingHospitalList]
      console.log(this.formValues.participatingSites)
      if(this.formValues.participatingSites) {
        const hospitalArray : any = [...this.formValues.participatingSites]
  
        const result = hospitalArray.filter((obj: any) => {
          return obj === 'Other'
        });
        console.log(result)
        if(result.length !== 0) {
          this.isParticipateOther = true
        } else {
          this.isParticipateOther = false
        }
      }


    })
  }

}

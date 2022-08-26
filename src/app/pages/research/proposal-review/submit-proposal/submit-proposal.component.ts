import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data'

@Component({
  selector: 'app-submit-proposal',
  templateUrl: './submit-proposal.component.html',
  styleUrls: ['./submit-proposal.component.scss']
})
export class SubmitProposalComponent implements OnInit {
  formObject: any = null;
  isViewOnly : boolean = false;

  @Input('formData') set formDateValues(data : any){
    this.formObject = data;
  }
  @Input('isViewOnly') set setViewOnly(data : any){
    this.isViewOnly = data;
  }

  listData = data;

  requestForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.requestFormInit();

    if(this.formObject != null) {
      this.requestForm.patchValue(this.formObject)

      if(this.formObject?.timeline.length != 0) {
        this.formObject.timeline.forEach((element : any) => {
          (<FormArray>this.requestForm.get('timeline')).push(
            new FormGroup({
              activity : new FormControl(element.activity, []),
              start : new FormControl(element.start, []),
              end : new FormControl(element.end, []),
            })
          );
        });
      }
    } else {
      this.addTimeline();
    }
  }

  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      title : new FormControl(null),
      typeOfResearch : new FormControl(null),
      ifOtherTypeOfResearch : new FormControl(null),
      typeOfStudyDesign : new FormControl(null),
      ifOtherTypeOfStudyDesign : new FormControl(null),
      abstract : new FormControl(null),
      
      researchMember : new FormControl(null),
      tasks : new FormControl(null),
      
      literatureReview : new FormControl(null),
      hypothesis : new FormControl(null),

      researchDesign : new FormControl(null),
      studyArea : new FormControl(null),
      sampling : new FormControl(null),
      definitionsAndMeasurements : new FormControl(null),
      dataCollectionTools : new FormControl(null),
      pilotStudy : new FormControl(null),
      dataQuality : new FormControl(null),
      dataAnalysis : new FormControl(null),
      ethicalConsiderations : new FormControl(null),
      resultsDissemination : new FormControl(null),
      limitationsAndDifficulties : new FormControl(null),
      expectedDuration : new FormControl(null),

      
      timeline : new FormArray([]),
      
      isOtherHealthInstitutionsInvolved : new FormControl(null),
      ifOtherHealthInstitutionsInvolved : new FormControl(null)

    })
    this.requestForm.valueChanges.subscribe(res => {
      console.log(res)
    })
  }

  get formValues() {
    return this.requestForm.value;
  }

  get timelineControls() {
    return (<FormArray>this.requestForm.get('timeline')).controls;
  }

  addTimeline() {
    (<FormArray>this.requestForm.get('timeline')).push(
      new FormGroup({
        activity : new FormControl(null, []),
        start : new FormControl(null, []),
        end : new FormControl(null, []),
      })
    );
  }

  onDeleteTimeline(index : number) {
    if((<FormArray>this.requestForm.get('timeline')).length != 1) {
      (<FormArray>this.requestForm.get('timeline')).removeAt(index);
    }
  }


}

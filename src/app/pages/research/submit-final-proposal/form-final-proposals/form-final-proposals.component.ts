import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-final-proposals',
  templateUrl: './form-final-proposals.component.html',
  styleUrls: ['./form-final-proposals.component.scss']
})
export class FormFinalProposalsComponent implements OnInit {

  formObject: any = null;
  isViewOnly : boolean = false;

  @Input('formData') set formDateValues(data : any){
    this.formObject = data;
  }
  @Input('isViewOnly') set setViewOnly(data : any){
    this.isViewOnly = data;
  }

  auditReportsFiles : File[] = [];
  otherFiles : File[] = [];

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
              status : new FormControl(element.status, []),
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
            
      executiveSummary : new FormControl(null),
      changeInObjective : new FormControl(null),
      changeInOverallResearchPlan : new FormControl(null),
      researchFindings : new FormControl(null),
      achievements : new FormControl(null),
      intellectualProperties : new FormControl(null),
      difficultiesAndChanges : new FormControl(null),
      recommendation : new FormControl(null),
      conclusion : new FormControl(null),
      otherInstitution : new FormControl(null),
      publication : new FormControl(null),

      timeline : new FormArray([]),


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
        status : new FormControl(null, [])
      })
    );
  }

  onDeleteTimeline(index : number) {
    if((<FormArray>this.requestForm.get('timeline')).length != 1) {
      (<FormArray>this.requestForm.get('timeline')).removeAt(index);
    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'auditReportsFiles' : {
        this.auditReportsFiles.splice(this.auditReportsFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }

  onSelect(event : any, type: any) {
    switch(type) {
      case 'auditReportsFiles' : {
        this.auditReportsFiles = []
        this.auditReportsFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}

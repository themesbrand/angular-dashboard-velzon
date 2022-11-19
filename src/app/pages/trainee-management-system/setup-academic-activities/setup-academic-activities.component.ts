import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup-academic-activities',
  templateUrl: './setup-academic-activities.component.html',
  styleUrls: ['./setup-academic-activities.component.scss']
})
export class SetupAcademicActivitiesComponent implements OnInit {

  requestForm !: FormGroup

  breadCrumbItems!: Array<{}>;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.breadCrumbItems = [
      { label: "Trainee Management System", link: '/trainee-management-system'},
      { label: "Setup Academic Activities", active : true }
    ];
  }

  formInit() {
    this.requestForm = this.formBuilder.group({
      activityType : new FormControl(null, []),
      residencyLevel : new FormControl('R1', []),
      topics : new FormArray([],[])
    })
  }

  get formValues() {
    console.log(this.requestForm.value)
    return this.requestForm.value;
  }

  get topicsControls() {
    return (<FormArray>this.requestForm.get('topics')).controls;
  }

  addTopics() {
    (<FormArray>this.requestForm.get('topics')).push(
      new FormGroup({
        'name' : new FormControl('', [])
      })
    );
  }

  deleteTopic(index : number) {
    if((<FormArray>this.requestForm.get('topics')).length != 1) {
      (<FormArray>this.requestForm.get('topics')).removeAt(index);
    }
  }
  
  onNavigate(url : any) {
    this.router.navigateByUrl(url);
  }

}

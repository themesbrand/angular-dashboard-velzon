import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-revise-equivalency-level',
  templateUrl: './revise-equivalency-level.component.html',
  styleUrls: ['./revise-equivalency-level.component.scss']
})
export class ReviseEquivalencyLevelComponent implements OnInit {

  newRequestForm !: FormGroup;

  supportingFiles: any [] = [];

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.newRequestFormInit();
    this.addSupportingFileArray()
  } 

  newRequestFormInit() {
    this.newRequestForm = this.formBuilder.group({
      
      supportingFileArray : new FormArray([]),
      
      level : new FormControl('L3'),
    })
  }

  get supportingFileArrayControls() {
    return (<FormArray>this.newRequestForm.get('supportingFileArray')).controls;
  }

  addSupportingFileArray() {
    (<FormArray>this.newRequestForm.get('supportingFileArray')).push(
      new FormGroup({
        title : new FormControl('', []),
        link : new FormControl('', []),
      })
    );
  }
  onDeleteSupportingFileArray(index : number) {
    if((<FormArray>this.newRequestForm.get('supportingFileArray')).length != 1) {
      (<FormArray>this.newRequestForm.get('supportingFileArray')).removeAt(index);
    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.splice(this.supportingFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }

  onSelect(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles = []
        this.supportingFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}

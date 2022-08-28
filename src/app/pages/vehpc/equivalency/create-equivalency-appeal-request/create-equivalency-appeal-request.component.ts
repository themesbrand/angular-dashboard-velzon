import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-equivalency-appeal-request',
  templateUrl: './create-equivalency-appeal-request.component.html',
  styleUrls: ['./create-equivalency-appeal-request.component.scss']
})
export class CreateEquivalencyAppealRequestComponent implements OnInit {
  formDataObject: any = null;
  isEditable: boolean = false;

  @Input('formData') set setFormData(data : any) {
    this.formDataObject = data
  }

  @Input('isEditable') set setIsEditable(data : any) {
    this.isEditable = data
  }

  newRequestForm !: FormGroup;

  supportingFiles: any [] = [];


  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.newRequestFormInit();
    if(this.formDataObject === null ) {
      this.addSupportingDocuments();
    } else {
      console.log(this.formDataObject)

      this.newRequestForm.patchValue(this.formDataObject)

      this.formDataObject.supportingDocumentsArray.forEach((element : any) => {
        (<FormArray>this.newRequestForm.get('supportingDocumentsArray')).push(
          new FormGroup({
            title : new FormControl(element.title),
            link : new FormControl('', []),
          })
        );
      })
    }
  }

  newRequestFormInit() {
    this.newRequestForm = this.formBuilder.group({
      certificate : new FormControl(null, []),
      reason : new FormControl(null, []),
      supportingDocumentsArray : new FormArray([]),
    })
  }

  get supportingDocumentsControls() {
    return (<FormArray>this.newRequestForm.get('supportingDocumentsArray')).controls;
  }
  addSupportingDocuments() {
    (<FormArray>this.newRequestForm.get('supportingDocumentsArray')).push(
      new FormGroup({
        title : new FormControl('', []),
        link : new FormControl('', []),
      })
    );
  }
  onDeleteSupportingDocuments(index : number) {
    if((<FormArray>this.newRequestForm.get('supportingDocumentsArray')).length != 1) {
      (<FormArray>this.newRequestForm.get('supportingDocumentsArray')).removeAt(index);
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

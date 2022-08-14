import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-withdrawal-request',
  templateUrl: './withdrawal-request.component.html',
  styleUrls: ['./withdrawal-request.component.scss']
})
export class WithdrawalRequestComponent implements OnInit {
  filesSupportingDocuments: any;

  withdrawalRequest: any = null;

  @Input('withdrawalRequest') 
  set isWithdrawalRequest(data: any){
    this.withdrawalRequest = data;
  };

  // formObject :any =  {
  //   supportingDocumentsArray : [
  //     {
  //       title : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum commodi numquam similique corrupti debitis odio?',
  //       supportingDocument : ''
  //     },
  //     {
  //       title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo adipisci quam, recusandae neque expedita quae vitae quaerat numquam temporibus.',
  //       supportingDocument : ''
  //     },
  //   ]
  // }
  
  constructor(
    private formBuilder : FormBuilder
  ) { }

  requestForm !: FormGroup

  ngOnInit(): void {
    this.requestFormInit();
    if(this.withdrawalRequest) {
      this.requestForm.patchValue(this.withdrawalRequest)
      this.withdrawalRequest.supportingDocumentsArray.forEach((element: any) => {
        (<FormArray>this.requestForm.get('supportingDocumentsArray')).push(
          new FormGroup({
            title : new FormControl(element.title),
            supportingDocument : new FormControl(element.supportingDocument)
          })
        );
      })
    } else {
      this.addSupportingDocumentsArray();
    }
  }
  
  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      reason : new FormControl(null),
      supportingDocumentsArray : new FormArray([])
    })
  }

  get supportingDocumentsControls() {
    return (<FormArray>this.requestForm.get('supportingDocumentsArray')).controls;
  }
  addSupportingDocumentsArray() {
    (<FormArray>this.requestForm.get('supportingDocumentsArray')).push(
      new FormGroup({
        title : new FormControl(null, []),
        supportingDocument : new FormControl(null, [])
      })
    );
  }
  onDeleteSupportingDocumentsArray(index : number) {
    if((<FormArray>this.requestForm.get('supportingDocumentsArray')).length != 1) {
      (<FormArray>this.requestForm.get('supportingDocumentsArray')).removeAt(index);
    }
  }

  
  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesSupportingDocuments' : {
        this.filesSupportingDocuments.splice(this.filesSupportingDocuments.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'filesSupportingDocuments' : {
        this.filesSupportingDocuments.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }
}

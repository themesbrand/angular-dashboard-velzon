import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserConfig } from "gridjs";

import { data } from '../data';

@Component({
  selector: 'app-add-procedure',
  templateUrl: './add-procedure.component.html',
  styleUrls: ['./add-procedure.component.scss']
})
export class AddProcedureComponent implements OnInit {

  procedureObject: any;
  selectedProcedureIndex: any;

  @Input('procedureDetails') 
  set procedureDetails(data: any){
    this.procedureObject = data;
    console.log(this.procedureObject)
  };
  
  listData = data;

  cptCodes : any[] = [];
  procedureName: any;

  procedureForm !: FormGroup

  public gridConfig: UserConfig = {
    columns: ["Code", "Description", "Area", "Type"],
    search: true,
    data: this.listData.cptCodes,
  };

  constructor(private modalService : NgbModal, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
    if(this.procedureObject) {
      this.patchForm()
    } else {
      this.addProcedureArray();
    }
  }
  
  patchForm() {
    console.log(this.procedureObject)
    this.procedureForm.patchValue(this.procedureObject)
    this.procedureObject?.procedures.forEach((element : any )=> {
      (<FormArray>this.procedureForm.get('procedure')).push(
        new FormGroup({
          procedureGroup : new FormControl(element.procedureGroup),
          procedureName : new FormControl(element.procedure),
          datePerformed : new FormControl(element.datePerformed),
          cptCode : new FormControl(element.cptCode),
          location : new FormControl(element.location),
          supervisor : new FormControl(element.supervisor),
          role : new FormControl(element.role),
          diagnosis : new FormControl(element.diagnosis),
          comments : new FormControl(element.comment),
        })
      );
    });
  }

  formInit() {
    this.procedureForm = this.formBuilder.group({
      patientId : new FormControl(''),
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      gender : new FormControl(null),
      dob : new FormControl(null),
      patientType : new FormControl(null),
      caseType : new FormControl(null),
      procedure : new FormArray([]),
    })

  }
  
  get formValues() {
    return this.procedureForm.value
  }

  get procedureArrayControls() {
    return (<FormArray>this.procedureForm.get('procedure')).controls;
  }
  
  addProcedureArray() {
    (<FormArray>this.procedureForm.get('procedure')).push(
      new FormGroup({
        procedureGroup : new FormControl(null),
        procedureName : new FormControl(null),
        datePerformed : new FormControl(null),
        cptCode : new FormControl(null),
        location : new FormControl(null),
        supervisor : new FormControl(null),
        role : new FormControl(null),
        diagnosis : new FormControl(null),
        comments : new FormControl(null),
      })
    );
  }
  onDeleteProcedure(index : number) {
    if((<FormArray>this.procedureForm.get('procedure')).length != 1) {
      (<FormArray>this.procedureForm.get('procedure')).removeAt(index);
    }
  }

  openModal(modal: any, size : any) {
    this.modalService.open(modal, { centered: true, size: size });
  }

  handleCellClick(event: any) {
    console.log("cellClicked", event);
  }

  handleRowClick(event: any) {
    console.log("rowClicked", event);
    console.log(event[1]._cells[0].data);
    console.log(this.selectedProcedureIndex);
    const procedures = (<FormArray>this.procedureForm.get('procedure'))
    procedures.controls[this.selectedProcedureIndex].patchValue({
      cptCode : event[1]._cells[0].data
    })
    this.modalService.dismissAll();
  }

  handleBeforeLoad(event: any) {
    console.log("beforeLoad", event);
  }

  handleGridLoad(event: any) {
    console.log("load", event);
  } 

  setIndex(i: any) {
    this.selectedProcedureIndex = i;
  }

  removeCptCode(i: any) {
    this.cptCodes.splice(i,1);
  }
}

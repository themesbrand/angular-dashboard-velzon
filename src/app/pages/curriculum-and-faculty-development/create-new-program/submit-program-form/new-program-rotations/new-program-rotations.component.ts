import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-program-rotations',
  templateUrl: './new-program-rotations.component.html',
  styleUrls: ['./new-program-rotations.component.scss']
})
export class NewProgramRotationsComponent implements OnInit {

  rotationsList : any[] = []
  isAddRotation: boolean = false

  selectedData: any = null;

  constructor() { }

  ngOnInit(): void {
  }


  onAddRotation() {
    this.selectedData = null;
    this.isAddRotation = true;
  }

  onSaveNewRotation(event : any) {
    this.isAddRotation = false
    console.log(event)

    const object = event.data

    object.r1 = 0
    object.r2 = 0
    object.r3 = 0
    object.r4 = 0
    object.r5 = 0

    if(event.idEdit) {
      this.rotationsList[event.index] = object
    } else {
      this.rotationsList.push(object)
    }

  }

  onEdit(object : any, index : any) {
    const _object = {
      data : object,
      index : index
    }
    this.selectedData = object;
    this.isAddRotation = true;
  }


  onDelete(index : any) {
    this.rotationsList.splice(index, 1)
  }
}

import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { data } from './data';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {

  listData = data;
      
  public Editor = ClassicEditor;

  generalObjectiveData: any;

  constructor() { }

  ngOnInit(): void {
  }


  onChangeContent(name : any, index : any, subCategory: any) {
    console.log(name)
    switch (name) {
      case 'General Objective' : {
        if(this.listData.generalObjective.editable) {
          this.listData.generalObjective.editable = false;
        } else {
          this.listData.generalObjective.editable = true;
        }
        break;
      }
      case 'Specific Objectives' : {
        if(this.listData.specificObjectives.editable) {
          this.listData.specificObjectives.editable = false;
        } else {
          this.listData.specificObjectives.editable = true;
        }
        break;
      }
      case 'Sub category Objectives' : {
        const object = this.listData.specificObjectives.objects[index].data;
        if(subCategory === 'generalRequirements') {
          if(object.generalRequirements.editable) {
            object.generalRequirements.editable = false;
          } else {
            object.generalRequirements.editable = true;
          }
          console.log(this.listData.specificObjectives.objects[index].data.generalRequirements.content)

        }
        if(subCategory === 'specificRequirements') {
          if(object.specificRequirements.editable) {
            object.specificRequirements.editable = false;
          } else {
            object.specificRequirements.editable = true;
          }
          console.log(this.listData.specificObjectives.objects[index].data.specificRequirements.content)

        }
        break;
      }
      default : {
        break;
      }
    }

  }
}

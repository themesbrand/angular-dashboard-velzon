import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import {data} from './data';

@Component({
  selector: 'app-select-topic-and-mentor',
  templateUrl: './select-topic-and-mentor.component.html',
  styleUrls: ['./select-topic-and-mentor.component.scss']
})
export class SelectTopicAndMentorComponent implements OnInit {

  listData = data;

  isSubmit : boolean = false;
  
  topicForm !: FormGroup;
  mentorsForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.topicFormInit();    
    this.mentorsFormInit();    
  }

  mentorsFormInit() {
    this.mentorsForm = this.formBuilder.group({
      topics : new FormArray([])
    })
  }

  topicFormInit() {
    this.topicForm = this.formBuilder.group({
      topic : new FormControl(null),
      additionalTopic : new FormControl(null),
    })

    this.topicForm.valueChanges.subscribe((res: any) => {
      console.log(res)
    })
  }

  get topicFormValues () {
    return this.topicForm.value
  }

  get topicsControls() {
    return (<FormArray>this.mentorsForm.get('topics')).controls;
  }


  onSubmit() {
    this.isSubmit = true;

    const formArray = <FormArray>this.mentorsForm.get('topics') as FormArray;

    formArray.controls = [];

    if(this.topicFormValues.topic) {
      (<FormArray>this.mentorsForm.get('topics')).push(
        new FormGroup({
          category : new FormControl(this.topicFormValues.topic.category),
          topic : new FormControl(this.topicFormValues.topic.name),
          mentor : new FormControl(null),
        })
      );
    }


    if(this.topicFormValues.additionalTopic.length != 0) {
      this.topicFormValues.additionalTopic.forEach((element: any) => {
        (<FormArray>this.mentorsForm.get('topics')).push(
          new FormGroup({
            category : new FormControl(element.category),
            topic : new FormControl(element.name),
            mentor : new FormControl(null),
          })
        );
      });
    }
  }

}

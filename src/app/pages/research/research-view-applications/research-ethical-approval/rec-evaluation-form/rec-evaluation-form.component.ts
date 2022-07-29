import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {data} from './data';

@Component({
  selector: 'app-rec-evaluation-form',
  templateUrl: './rec-evaluation-form.component.html',
  styleUrls: ['./rec-evaluation-form.component.scss']
})
export class RecEvaluationFormComponent implements OnInit {

  listData = data;

  opinionsForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
  }



}

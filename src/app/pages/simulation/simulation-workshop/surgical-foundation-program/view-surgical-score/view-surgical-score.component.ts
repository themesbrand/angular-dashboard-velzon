import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-surgical-score',
  templateUrl: './view-surgical-score.component.html',
  styleUrls: ['./view-surgical-score.component.scss']
})
export class ViewSurgicalScoreComponent implements OnInit {

  formObject: any;
  
  @Input('formData') set setFormData(data : any) {
    this.formObject = data;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

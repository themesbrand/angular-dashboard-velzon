import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graduation-form-request-view',
  templateUrl: './graduation-form-request-view.component.html',
  styleUrls: ['./graduation-form-request-view.component.scss']
})
export class GraduationFormRequestViewComponent implements OnInit {

  @Input() formRequest : any;

  constructor() { }

  ngOnInit(): void {
  }

}

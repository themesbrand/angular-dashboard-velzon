import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-new-media-request-cpd',
  templateUrl: './view-new-media-request-cpd.component.html',
  styleUrls: ['./view-new-media-request-cpd.component.scss']
})
export class ViewNewMediaRequestCpdComponent implements OnInit {

  @Input() formData : any = null

  constructor() { }

  ngOnInit(): void {
  }

}

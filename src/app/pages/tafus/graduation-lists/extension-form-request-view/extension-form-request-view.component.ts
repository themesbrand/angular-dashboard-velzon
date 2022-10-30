import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extension-form-request-view',
  templateUrl: './extension-form-request-view.component.html',
  styleUrls: ['./extension-form-request-view.component.scss']
})
export class ExtensionFormRequestViewComponent implements OnInit {

  @Input() formRequest : any;

  constructor() { }

  ngOnInit(): void {
  }

}

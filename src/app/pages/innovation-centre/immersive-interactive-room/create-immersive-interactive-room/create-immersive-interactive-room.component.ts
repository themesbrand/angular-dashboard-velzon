import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-immersive-interactive-room',
  templateUrl: './create-immersive-interactive-room.component.html',
  styleUrls: ['./create-immersive-interactive-room.component.scss']
})
export class CreateImmersiveInteractiveRoomComponent implements OnInit {
  interactiveData: any = null;

  @Input('formData') set formDataObject(data: any) {
    this.interactiveData = data
  }
  constructor() { }

  ngOnInit(): void {
  }

}

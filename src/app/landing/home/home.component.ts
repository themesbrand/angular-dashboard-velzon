import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showNavigationArrows: any;
  showNavigationIndicators: any;

  currentSection : any = 'Who We Are'

  comments: any[] =[
    {
      src : 'assets/images/users/avatar-1.jpg',
      comment : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo facilis dolor illo ipsa libero nisi amet distinctio, omnis dolore quaerat exercitationem impedit? In, quos sit? Culpa.',
      name : 'Madan Al Abri',
      position : 'Student' 
    },
    {
      src : 'assets/images/users/avatar-2.jpg',
      comment : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo facilis dolor illo ipsa libero nisi amet distinctio, omnis dolore quaerat exercitationem impedit? In, quos sit? Culpa.',
      name : 'Al Abri Ibraham',
      position : 'Professor' 
    },
    {
      src : 'assets/images/users/avatar-3.jpg',
      comment : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo facilis dolor illo ipsa libero nisi amet distinctio, omnis dolore quaerat exercitationem impedit? In, quos sit? Culpa.',
      name : 'Hilal basheer',
      position : 'Student' 
    },
  ]

  selectedIndex : number = 0;

  
  constructor() { }

  ngOnInit(): void {
  }

  onChangeSelection(selection : any) {
    this.currentSection = selection
  }

  onChangeComment () {
    if(this.selectedIndex === 2) {
      this.selectedIndex = 0
    } else {
      this.selectedIndex = this.selectedIndex + 1
    }
  }
}

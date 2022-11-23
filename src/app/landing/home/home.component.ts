import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showNavigationArrows: any;
  showNavigationIndicators: any;

  currentSection : any = 'Who We Are'

  alert : any[] = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo facilis dolor illo ipsa libero nisi amet distinctio, omnis dolore quaerat exercitationem impedit? In, quos sit? Culpa.',
    'Quo facilis dolor illo ipsa libero nisi amet distinctio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo facilis dolor illo ipsa libero nisi amet distinctio, omnis dolore quaerat exercitationem impedit? In, quos sit? Culpa.',
    'omnis dolore quaerat exercitationem impedit? In, quos sit. Culpa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo facilis dolor illo ipsa libero nisi amet distinctio, omnis dolore quaerat exercitationem impedit.'
  ]

  selectedAlert: number = 0
  maxAlertCount = 2;

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

  traineesCounterNumber :number=0; 
  simulationSessionsNumber :number=0; 
  courseParticipantsNumber :number=0; 
  physiciansNumber :number=0; 
  cpdNumber :number=0; 
  articlesNumber :number=0; 

  @HostListener('window:scroll', ['$event'])   
  onWindowScroll($event : any) {  
    var rect = this.sectionCounters.nativeElement.getBoundingClientRect();
    var elemTop = rect.top; var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    isVisible ? this.traineesCounterNumber=3650:null
    isVisible ? this.simulationSessionsNumber=1240:null
    isVisible ? this.courseParticipantsNumber=2648:null
    isVisible ? this.physiciansNumber=541:null
    isVisible ? this.cpdNumber=1290:null
    isVisible ? this.articlesNumber=3544:null
    
  } 
  
  @ViewChild('sectionCounters') sectionCounters !: ElementRef;

  
  constructor() { }

  ngOnInit(): void {

    this.setAlerts();
  }

  setAlerts() {
    setTimeout(() => {
      if(this.selectedAlert === this.maxAlertCount) {
        this.selectedAlert = 0
      } else {
        this.selectedAlert = this.selectedAlert + 1
      }
      this.setAlerts()
    }, 2000);
  }

  onChangeAlert(type : any) {
    if(type === 'prev') {
      if(this.selectedAlert === 0) {
        this.selectedAlert = this.maxAlertCount
      } else {
        this.selectedAlert = this.selectedAlert - 1
      }
    } else {
      if(this.selectedAlert === this.maxAlertCount) {
        this.selectedAlert = 0
      } else {
        this.selectedAlert = this.selectedAlert + 1
      }
    }
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

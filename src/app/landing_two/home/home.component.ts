import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showNavigationArrows: any;
  showNavigationIndicators: any;
  
  traineesCounterNumber :number=0; 
  simulationSessionsNumber :number=0; 
  courseParticipantsNumber :number=0; 
  physiciansNumber :number=0; 
  cpdNumber :number=0; 
  articlesNumber :number=0; 

  @HostListener('window:scroll', ['$event'])   
  onWindowScroll($event : any) {  
    var rect = this.counter.nativeElement.getBoundingClientRect();
    var elemTop = rect.top; var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    isVisible ? this.traineesCounterNumber=3650:null
    isVisible ? this.simulationSessionsNumber=1240:null
    isVisible ? this.courseParticipantsNumber=2648:null
    isVisible ? this.physiciansNumber=541:null
    isVisible ? this.cpdNumber=1290:null
    isVisible ? this.articlesNumber=3544:null
    
  } 
  
  @ViewChild('counter') counter !: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}

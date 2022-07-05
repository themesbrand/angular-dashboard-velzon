import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper/types/swiper-options';

import { data } from './data'

@Component({
  selector: 'app-ec-setup',
  templateUrl: './ec-setup.component.html',
  styleUrls: ['./ec-setup.component.scss']
})
export class EcSetupComponent implements OnInit {

  programData : any = data.programDataObject

  Progress = {
    initialSlide: 0,
    slidesPerView: 4,
    navigation: true,
    scrollbar: true,
  };
  

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  onNavigate(type : any) {
    switch (type) {
        case 'Create Program' : {
            this.router.navigateByUrl('/ec-setup/create-program')
            break;
        }
        
        default : {
            break;
        }
    }
  }

  viewProgram() {
    this.router.navigateByUrl('/ec-setup/view-program')

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

/**
 * Index Component
 */
export class IndexComponent implements OnInit {

  currentSection = 'home_2';
  showNavigationArrows: any;
  showNavigationIndicators: any;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('is-sticky');
    }
    else {
      navbar?.classList.remove('is-sticky');
      // navbar.style.padding = '20px';
    }
  }

   /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
    onSectionChange(sectionId: string) {
      this.currentSection = sectionId;
    }

     /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarSupportedContent')?.classList.toggle('show');
  }

  routerTo(route : any) {
    console.log(`/${route}`)
    this.router.navigateByUrl(`${route}`, { state: { path : route} })


    
  }

}

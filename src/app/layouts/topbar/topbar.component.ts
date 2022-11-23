import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventService } from '../../core/services/event.service';

//Logout
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../core/services/authfake.service';
import { Router } from '@angular/router';

// Language
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../core/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  userRole: string | null = null;

  element: any;
  viewSwitch : boolean = false;
  mode: string | undefined;
  @Output() mobileMenuButtonClicked = new EventEmitter();

  flagvalue: any;
  valueset: any;
  countryName: any;
  cookieValue: any;

  constructor(@Inject(DOCUMENT) private document: any,private eventService: EventService,
  public _cookiesService: CookieService, public translate: TranslateService, private authService: AuthenticationService, private authFackservice: AuthfakeauthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.element = document.documentElement;
    this.userRole = localStorage.getItem('userType');

    if(this._cookiesService.get('viewMode') === 'RTL') {
      this.viewSwitch = true;
    }
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
     toggleMobileMenu(event: any) {
      event.preventDefault();
      this.mobileMenuButtonClicked.emit();
    }

  /**
   * Fullscreen method
   */
   fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  /**
  * Topbar toogle view
  */
   changeMode() {
    if(this.viewSwitch) {
      this._cookiesService.set('viewMode', 'RTL')
    } else {
      this._cookiesService.set('viewMode', 'LTR')
    }
    window.location.reload();
  }

    /**
  * Topbar Light-Dark Mode Change
  */
  changeColorMode(mode: string) {
  this.mode = mode;
  this.eventService.broadcast('changeMode', mode);

  switch (mode) {
    case 'light':
      document.body.setAttribute('data-layout-mode', "light");
      document.body.setAttribute('data-sidebar', "light");
      break;
    case 'dark':
      document.body.setAttribute('data-layout-mode', "dark");
      document.body.setAttribute('data-sidebar', "dark");
      break;
    default:
      document.body.setAttribute('data-layout-mode', "light");
      break;
  }
  }
  
  /**
   * Logout the user
   */
   logout() {
    if (environment.defaultauth === 'firebase') {
      this.authService.logout();
    } else {
      this.authFackservice.logout();
    }
    this.router.navigate(['/home']);
  }

}

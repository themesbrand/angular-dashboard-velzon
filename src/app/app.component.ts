import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OMSB';

  constructor(@Inject(DOCUMENT) private document: Document,
  private _cookiesService : CookieService) {

    console.log(this._cookiesService.get('viewMode'))
    if(this._cookiesService.get('viewMode') === "") {
      this._cookiesService.set('viewMode', 'LTR')
      return;
    }

    const htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    const bodyTag = this.document.getElementsByTagName("body")[0];
    if(this._cookiesService.get('viewMode') === 'RTL') {
      htmlTag.dir = 'rtl' 
      bodyTag.classList.add('rtlEnabled')
      
    } else if (this._cookiesService.get('viewMode')  === 'LTR') {
      htmlTag.dir = 'ltr'
      bodyTag.classList.remove('rtlEnabled')
    }
  }
}

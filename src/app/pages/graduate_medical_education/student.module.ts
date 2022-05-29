import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbTooltipModule, NgbDropdownModule, NgbAccordionModule, NgbProgressbarModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

// Calendar package
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';
// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';
// Ck Editer
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// Counter
import { CountToModule } from 'angular-count-to';
// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';
// Select Droup down
import { NgSelectModule } from '@ng-select/ng-select';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Component Pages
import { SharedModule } from '../../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './dashboard/student.component';
import { StudentMasterComponent } from './student-master/student-master.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { StudentCreateComponent } from './student-master/student-create/student-create.component';
import { StudentEditComponent } from './student-master/student-edit/student-edit.component';

export function createTranslateLoader(http: HttpClient): any {
return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    StudentComponent,
    StudentMasterComponent,
    StudentCreateComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbProgressbarModule,
    FeatherModule.pick(allIcons),
    FullCalendarModule,
    FlatpickrModule.forRoot(),
    SimplebarAngularModule,
    CKEditorModule,
    CountToModule,
    NgSelectModule,
    NgApexchartsModule,
    LeafletModule,
    NgbModule,
    StudentRoutingModule,
    TranslateModule.forChild({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }),
    SharedModule
  ], 
  providers: [
    
  ]
})
export class AppsModule { }

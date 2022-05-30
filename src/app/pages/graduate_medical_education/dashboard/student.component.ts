import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-graduate-medical-education',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {

    breadCrumbItems!: Array<{}>;

    constructor(private router : Router) { }

    ngOnInit(): void {
    /**
     * BreadCrumb
     */
        this.breadCrumbItems = [
        { label: 'Graduate Medical Education', active: true }
        ];
    }

    onNavigate(type : any) {
        switch (type) {
            case 'Student Master' : {
                this.router.navigateByUrl('/graduate-medical-education/registrar_office')
                break;
            }
            default : {
                break;
            }
        }
    }
    
}
  
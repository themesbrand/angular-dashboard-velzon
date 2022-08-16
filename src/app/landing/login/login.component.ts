import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

// Login Auth
import { environment } from "../../../environments/environment";
import { AuthenticationService } from "../../core/services/auth.service";
import { AuthfakeauthenticationService } from "../../core/services/authfake.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  // Login Form
  loginForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = "";
  returnUrl!: string;

  toast!: false;

  // set the current year
  year: number = new Date().getFullYear();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private authFackservice: AuthfakeauthenticationService,
    private route: ActivatedRoute
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/dashboard"]);
    }
  }

  ngOnInit(): void {
    console.log(history.state);

    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      email: ["eportal@omsb.org", [Validators.required]],
      password: ["123456", [Validators.required]],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/home/main";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Form submit
   */
  onSubmit(submitType : any) {
    console.log(this.f["password"].value)
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      this.authFackservice
          .login(this.f["email"].value, this.f["password"].value)
          .pipe(first())
          .subscribe(
            (data) => {
              console.log(this.returnUrl);
              if (this.returnUrl === "/home/application-forms") {
                this.router.navigateByUrl("/home/application-forms", { state: { path : "application-forms"} });
                return;
              }
              if (this.returnUrl === "/home/registration") {
                this.router.navigateByUrl("/home/registration", { state: { path : "registration"} });
                return;
              }

              switch (this.f["email"].value) {
                case 'eportal@omsb.org' : {
                  this.router.navigateByUrl("/dashboard");
                  localStorage.setItem('userType' , 'eportal@omsb.org')
                  break;
                }
                case 'employer@omsb.org' : {
                  localStorage.setItem('userType' , 'employer@omsb.org')
                  this.router.navigateByUrl("/employer/dashboard");
                  break;
                }
                case 'interviewer@omsb.org' : {
                  localStorage.setItem('userType' , 'interviewer@omsb.org')
                  this.router.navigateByUrl("/interviewer/dashboard");
                  break;
                }
                case 'applicant@omsb.org' : {
                  localStorage.setItem('userType' , 'applicant@omsb.org')
                  this.router.navigateByUrl("/applicant/application-list");
                  break;
                }
                case 'finance@omsb.org' : {
                  localStorage.setItem('userType' , 'finance@omsb.org')
                  this.router.navigateByUrl("/finance/dashboard");
                  break;
                }
                case 'international@omsb.org' : {
                  localStorage.setItem('userType' , 'international@omsb.org')
                  this.router.navigateByUrl("/international/dashboard");
                  break;
                }
                case 'pd@omsb.org' : {
                  localStorage.setItem('userType' , 'pd@omsb.org')
                  this.router.navigateByUrl("/dashboard");
                  break;
                }
                case 'trainee@omsb.org' : {
                  localStorage.setItem('userType' , 'trainee@omsb.org')
                  this.router.navigateByUrl("/dashboard-trainee");
                  break;
                }
                default : break;
              }
              
              
            },
            (error) => {
              this.error = error ? error : "";
            }
          );
    }
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}

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
      email: ["admin@themesbrand.com", [Validators.required, Validators.email]],
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
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    console.log("click");
    if (this.loginForm.invalid) {
      return;
    } else {
      if (environment.defaultauth === "firebase") {
        this.authenticationService
          .login(this.f["email"].value, this.f["password"].value)
          .then((res: any) => {
            if (this.returnUrl === "/home/application-forms") {
              this.router.navigateByUrl("/home/application-forms", { state: { path : "application-forms"} });
              return;
            }
            this.router.navigateByUrl("/dashboard");
          })
          .catch((error) => {
            this.error = error ? error : "";
          });
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
              this.router.navigateByUrl("/dashboard");
            },
            (error) => {
              this.error = error ? error : "";
            }
          );
      }
    }
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}

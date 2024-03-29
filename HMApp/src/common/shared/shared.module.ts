import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../common-components/signin/signin.component';
import { SignupComponent } from '../common-components/signup/signup.component';
import { LandingComponent } from '../common-components/landing/landing.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    LandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SigninComponent,
    SignupComponent
  ]
})
export class SharedModule { }

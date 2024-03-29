import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../common-components/signin/signin.component';
import { SignupComponent } from '../common-components/signup/signup.component';
import { LandingComponent } from '../common-components/landing/landing.component';
import { MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    SigninComponent,
    SignupComponent,
    MatButtonModule
  ]
})
export class SharedModule { }

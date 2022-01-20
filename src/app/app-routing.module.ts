import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './Guard/auth.guard';
import { UnsavedGuard } from './Guard/unsaved.guard';
import { LoginComponent } from './login/login.component';
import { RagistrationComponent } from './ragistration/ragistration.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:"",redirectTo:"about",pathMatch:"full"},
  {path:"user",component:UsersComponent,canActivate:[AuthGuard]},
  {path:"about",component:AboutUsComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent,canDeactivate:[UnsavedGuard]},
  {path:"ragistration",component:RagistrationComponent,canActivate:[AuthGuard]},
  {path:"contact",component:ContactComponent,canActivate:[AuthGuard]},
  {path:"**",component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';

const routes: Routes = [
  {
     path: 'login', component: LoginComponent 
    },
    {
      path: 'navigation', component: NavigationComponent 
     },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

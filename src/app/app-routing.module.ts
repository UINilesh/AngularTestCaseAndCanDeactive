import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DirtyCheckGuard } from './guards/dirty-check.guard';


const routes: Routes = [
  {
    path:'', component:PizzaComponent
  },
  {
    path: 'register', component:RegisterFormComponent,
    canDeactivate: [DirtyCheckGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

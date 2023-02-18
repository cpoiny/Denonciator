import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsentComponent } from './pages/absent/absent.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
 {
  path: "",
  component : HomeComponent
 },
 {
  path: "absent",
  component : AbsentComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

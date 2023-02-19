import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsentComponent } from './pages/absent/absent.component';
import { HomeComponent } from './pages/home/home.component';
import { TirageComponent } from './pages/tirage/tirage.component';

const routes: Routes = [
 {
  path: "",
  component : HomeComponent
 },
 {
  path: "tirage",
  component : TirageComponent
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

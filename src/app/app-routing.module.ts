import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponentComponent } from './Components/heroes-component/heroes-component.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'heroes',component: HeroesComponentComponent },
  {path:"dashboard",component:DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'details/:id',component:HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

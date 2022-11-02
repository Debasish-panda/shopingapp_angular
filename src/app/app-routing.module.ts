import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PdetailComponent } from './pdetail/pdetail.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [

    {
      path:'', redirectTo:'home', pathMatch:'full'
    },
    {
      path:'home', component: HomeComponent
    },
    {
      path:'cart', component:CartComponent
    },
    {
      path:'pdetail', component:PdetailComponent
    },
    {
      path:'profile', component:ProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

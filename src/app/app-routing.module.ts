import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent, data:{ breadcrumb:'home'}},
  {path:'shop',component:ShopComponent, data:{ breadcrumb:'shop'}},
  {path:'basket',component:BasketComponent, data:{ breadcrumb:'basket'}},
  {path:'*', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

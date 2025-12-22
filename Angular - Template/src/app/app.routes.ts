import { Routes } from '@angular/router';
import { HomePage } from './component/home-page/home-page';
import { ItemsPage } from './component/items-page/items-page';
import { ItemsDetails } from './component/items-details/items-details';
import { ShoopingCart } from './component/shooping-cart/shooping-cart';
import { BillingInfo } from './component/billing-info/billing-info';
import { AdminHome } from './component/Admin/admin-home/admin-home';

export const routes: Routes = [
  {
    path: 'HomePage',
    component: HomePage,
  },
  {
    path: 'Items',
    component: ItemsPage,
  },
  {
    path: 'ItemsDetails/:Id_Item',
    component: ItemsDetails,
  },
  {
    path: 'ShoopingCart',
    component: ShoopingCart,
  },
  {
    path: 'BillingInfo',
    component: BillingInfo,
  },
  {
    path: 'Admin/Home',
    component: AdminHome,
  },
  { path: '', redirectTo: 'HomePage', pathMatch: 'full' },
];

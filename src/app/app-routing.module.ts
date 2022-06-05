import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewbillComponent } from './components/addnewbill/addnewbill.component';
import { BillComponent } from './components/bill/bill.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PurchseComponent } from './components/purchse/purchse.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'purchase' },
  // { path: 'navbar', component: NavbarComponent },
  { path: 'purchase',
   component: PurchseComponent ,
   children:[
    { path: 'bill',
     component: BillComponent,
     children:[
      { path: 'addNewbill', component: AddnewbillComponent }
  
  
     ]
    }

   ]
   
  },
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [NavbarComponent,
  PurchseComponent,
  BillComponent,
  AddnewbillComponent]

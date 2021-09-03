import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { BaseComponent } from './base/base.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./Authentication/authentication.module')
  .then(m => m.AuthenticationModule)},

  

  { path: '', component: BaseComponent, children: [
    { path: '', loadChildren: () => import('./Components/components.module')
  .then(m => m.ComponentsModule)},
   

    ]
  },
 
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

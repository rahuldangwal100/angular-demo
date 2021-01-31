import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { TdformsComponent } from './tdforms/tdforms.component';
import { TwoComponent } from './two/two.component';


const routes: Routes = [
  {path:'',component:ContactComponent},
  {path:'details',component:DetailsComponent},
  {path:'mergemap',component:MergemapComponent},
  {path:'tdforms',component:TdformsComponent},
  {path:'**',component:TwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftComponent } from './draft/draft.component';
import { HomeComponent } from './home/home.component';
import { Draft } from './models/draft';

const routes: Routes = [
  { path: 'draft/:id', component: DraftComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

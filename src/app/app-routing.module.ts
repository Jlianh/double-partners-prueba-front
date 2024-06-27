import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSearchComponent } from './profile-search/profile-search.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/search-gif', pathMatch: 'full'
  },
  {
    path: 'search-gif', component: ProfileSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

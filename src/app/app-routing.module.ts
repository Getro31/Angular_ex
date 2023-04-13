import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'exercices',
    loadChildren: () =>
      import('./exercise-physique/exercise-physique-routing.module').then(
        (m) => m.exercice_physiqueRouting
      ),
  },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  { path: 'Home', title: 'Home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

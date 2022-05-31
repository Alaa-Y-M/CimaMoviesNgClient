import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { LoginComponent } from './account/login/login.component';
import { PasswordconfirmComponent } from './account/passwordconfirm/passwordconfirm.component';
import { RegisterComponent } from './account/register/register.component';
import { RegisterconfirmComponent } from './account/registerconfirm/registerconfirm.component';
import { AddActorComponent } from './admin/Actors/add-actor/add-actor.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AddCategoryComponent } from './admin/Categories/add-category/add-category.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditUserRoleComponent } from './admin/edit-user-role/edit-user-role.component';
import { EditMovieActorComponent } from './admin/MovieActors/edit-movie-actor/edit-movie-actor.component';
import { EditMovieLinkComponent } from './admin/MovieLinks/edit-movie-link/edit-movie-link.component';
import { AddMovieComponent } from './admin/Movies/add-movie/add-movie.component';
import { EditMovieComponent } from './admin/Movies/edit-movie/edit-movie.component';
import { SubCategoryComponent } from './admin/SubCategories/sub-category/sub-category.component';
import { DashboardGuard } from './guards/dashboard.guard';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registerconfirm', component: RegisterconfirmComponent },
  { path: 'forgetpassword', component:ForgetPasswordComponent},
  { path: 'passwordconfirm', component: PasswordconfirmComponent },
  { path: 'controlpanel', component: DashboardComponent, canActivate: [DashboardGuard] },
  { path: 'edituser/:id', component: AddUserComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'accessdenied', component: AccessdeniedComponent },
  { path: 'edituserrole/:id/:id1', component: EditUserRoleComponent },
  { path: 'category', component: AddCategoryComponent },
  { path: 'editcategory/:id/:id1', component: AddCategoryComponent },
  { path: 'subcategory', component: SubCategoryComponent },
  { path: 'editsubcategory/:id/:id1/:id2', component: SubCategoryComponent },
  { path: 'addactor', component: AddActorComponent },
  { path: 'editactor/:id', component: AddActorComponent },
  { path: 'editmovie/:id', component: EditMovieComponent },
  { path: 'addmovie', component: AddMovieComponent },
  { path: 'editlinks/:id', component: EditMovieLinkComponent },
  { path: 'addlink', component: EditMovieLinkComponent },
  { path: 'editmovieactor/:id', component: EditMovieActorComponent },
  { path: 'addmovieactor', component: EditMovieActorComponent },
  { path: 'getmovie/:id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

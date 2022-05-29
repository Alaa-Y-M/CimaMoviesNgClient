import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { ForgtPasswordComponent } from './account/forget-password/forget-password.component';
import { RegisterconfirmComponent } from './account/registerconfirm/registerconfirm.component';
import { PasswordconfirmComponent } from './account/passwordconfirm/passwordconfirm.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditUserRoleComponent } from './admin/edit-user-role/edit-user-role.component';
import { UserRolesComponent } from './admin/user-roles/user-roles.component';
import { UsersComponent } from './admin/users/users.component';
import { DashboardGuard } from './guards/dashboard.guard';
import { ActorListComponent } from './admin/Actors/actor-list/actor-list.component';
import { AddActorComponent } from './admin/Actors/add-actor/add-actor.component';
import { AddCategoryComponent } from './admin/Categories/add-category/add-category.component';
import { CategoryListComponent } from './admin/Categories/category-list/category-list.component';
import { EditMovieActorComponent } from './admin/MovieActors/edit-movie-actor/edit-movie-actor.component';
import { MovieActorListComponent } from './admin/MovieActors/movie-actor-list/movie-actor-list.component';
import { MovieLinkListComponent } from './admin/MovieLinks/movie-link-list/movie-link-list.component';
import { EditMovieLinkComponent } from './admin/MovieLinks/edit-movie-link/edit-movie-link.component';
import { AddMovieComponent } from './admin/Movies/add-movie/add-movie.component';
import { EditMovieComponent } from './admin/Movies/edit-movie/edit-movie.component';
import { MovieListComponent } from './admin/Movies/movie-list/movie-list.component';
import { SubCategoryComponent } from './admin/SubCategories/sub-category/sub-category.component';
import { SubCategoryListComponent } from './admin/SubCategories/sub-category-list/sub-category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AccessdeniedComponent,
    NotFoundComponent,
    FooterMenuComponent,
    MovieDetailsComponent,
    RegisterComponent,
    LoginComponent,
    ForgtPasswordComponent,
    RegisterconfirmComponent,
    PasswordconfirmComponent,
    AddUserComponent,
    DashboardComponent,
    EditUserRoleComponent,
    UserRolesComponent,
    UsersComponent,
    ActorListComponent,
    AddActorComponent,
    AddCategoryComponent,
    CategoryListComponent,
    EditMovieActorComponent,
    MovieActorListComponent,
    MovieLinkListComponent,
    EditMovieLinkComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieListComponent,
    SubCategoryComponent,
    SubCategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DashboardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

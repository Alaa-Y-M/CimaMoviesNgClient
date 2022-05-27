import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/Movie';
import { SubCategory } from '../models/SubCatgory';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private fb: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  subCategories: SubCategory[]=null!;
  formSearch:FormGroup=null!;
  movies: Movie[] = null!;

  message: string = '';

  ngOnInit(): void {
    this.GetSubCategories();
    this.formSearch = this.fb.group({
      search: ['', Validators.required]
    })

    this.activateRoute.paramMap.subscribe(param => {
      var actorId = +param.get('id')!;
      if (actorId) {
        this.homeService.GetMovieByActor(actorId).subscribe(list => {
          this.movies = this.movies || [];
          for (let i = 0; i < list.length; i++) {
            const movie = list[i].movie;
            if (movie.id > 0) {
              this.movies.push(movie);
            }
          }
          console.log(this.movies);
        })
      } else {
        this.GetMovies('');
      }
    })
  }

  GetSubCategories() {
    this.homeService.GetAllSubCategories().subscribe(subs => {
      this.subCategories = subs;
    })
  }

  GetMovies(search: string) {
    this.homeService.GetAllMovies(search).subscribe(list => {
      this.movies = list;
    })
  }

  GetSubCategory(categoryName: string) {
    this.GetMovies(categoryName);
  }

  onSearch() {
    if (this.formSearch.valid) {
      let search = "";
      search = this.formSearch.value.search;
      this.homeService.GetAllMovies(search).subscribe(list => {
        if (list.length > 0) {
          this.movies = list;
          this.message = '';
        }
        else {
          this.movies = [];
          this.message = 'لم يسفر البحث عن اي نتيجة. حاول بكلمات أخري';
        }

        console.log(this.movies);
      })
    }
  }

  navigateMovie(id: number) {
    this.router.navigate(['/getmovie', id]);
  }

}

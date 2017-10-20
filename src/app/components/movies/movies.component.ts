import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
})
export class MoviesComponent  {  

		popularList: Array<Object>;
		theatersList: Array<Object>;
		searchString: string; 
		searchRes: Array<Object>; 

		constructor(private _movieService: MovieService)
		{
			this._movieService.getFilmsPopulaires().subscribe(res => {
					this.popularList = res.results; 
					// console.log(res.results); 
					}); 
				
			

			this._movieService.getInTheatres().subscribe(res => {
					this.theatersList = res.results; 
					console.log(res.results); 

					}); 
			
		}

		searchMovies()
		{
			console.log(this.searchString); 

			this._movieService.searchMovies(this.searchString).subscribe(res => {
					this.searchRes = res.results; 
					console.log(res.results); 

					}); 			
		}



}

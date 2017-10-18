import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: `movies.component.html`,
})
export class MoviesComponent  {  

		popularList: Array<Object>;
		theatersList: Array<Object>;


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



}

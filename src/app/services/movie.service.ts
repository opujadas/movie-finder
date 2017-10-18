import { Injectable } from '@angular/core'; 
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class MovieService
{
	apikey: string; 


	constructor(private _jsonp: Jsonp)
	{
		this.apikey = '7c4ae1ed64881b6ad4d1b59c9cd6bd5a'; 
		console.log('MovieService initialized.'); 
	}

	getFilmsPopulaires()
	{
		return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apikey)
				.map(res => res.json()); 
	}

	getInTheatres()
	{
		console.log('On récupère les films au cinéma'); 
		return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-09-15&primary_release_date.lte=2017-10-22&api_key=' + this.apikey)
				.map(res => res.json()); 
	}

	searchMovies(searchString: string)
	{
		console.log('On cherche un film '); 
		return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+ searchString +'&sort_by=popularity.desc&api_key=' + this.apikey)
				.map(res => res.json()); 		
	}
}


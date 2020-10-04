import {SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOVIE,LOADING} from './Types';
import axios from 'axios';

export const searchMovie= search => dispatch => {
	dispatch({
		type:SEARCH_MOVIE,
		payload: search
	})
}

const API_KEY='c854c0fc';

export const fetchMovies = search =>dispatch=>{
	axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
		.then(response=>dispatch({
			type:FETCH_MOVIES,
			payload:response.data
		}))
		.catch(err=>console.log(err))
}

export const fetchMovie = id =>dispatch=>{
	axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
		.then(response=>dispatch({
			type:FETCH_MOVIE,
			payload:response.data
		}))
		.catch(err=>console.log(err))
}

export const setLoading =()=>{
	return {
		type:LOADING
	}
}
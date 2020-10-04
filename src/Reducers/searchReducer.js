import {SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOVIE,LOADING} from '../Actions/Types';

export const initialState = {
	search:'',
	movies:[],
	loading: false,
	movie:[]
}

  const searchReducers=(state=initialState, action) =>{
	switch (action.type) {
		case SEARCH_MOVIE:
			return{
				...state,
				search:action.payload,
				loading:false
			}
		case FETCH_MOVIES:
			return{
				...state,
				movies:action.payload,
				loading:false
			}
		case FETCH_MOVIE:
			return{
				...state,
				movie:action.payload,
				loading:false
			}
		case LOADING:
			return{
				...state,
				loading:true
			}
		default:
			return state;
	}
}

export default searchReducers;
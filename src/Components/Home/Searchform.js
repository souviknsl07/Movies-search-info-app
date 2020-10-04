import React,{Component} from 'react'
import {connect} from 'react-redux'
import {searchMovie,fetchMovies,setLoading} from '../../Actions/searchActions'



class Searchform extends Component {
	
 	onChange = e => {
		this.props.searchMovie(e.target.value)
	}
	
	onSubmit = e => {
		e.preventDefault()
		this.props.fetchMovies(this.props.search)
		this.props.setLoading()
	}

	render() {
		return (
			<div className='card mt-5 ml-5 mr-5' style={{backgroundColor:'lightgray'}}>
			<div className='container'>
			<div className=' form pa3 mt-5'>
			 <div style={{display:'flex', justifyContent:'center'}}>
			 	<h1 className='mb-3'>
			 	<i className='fa fa-search'/> Search for Movies and Web Series Here
			 	</h1>
			 </div>
			  <form className="form-group" onSubmit={this.onSubmit}>
			    <input type="text" className="form-control" 
			    placeholder="Search for movies and series"
			    onChange={this.onChange}
			    />
			    <div style={{textAlign:'center'}}>
			  		<button type="submit" 
			  		className="btn btn-primary mt-3 mb-5"
			  		>Search</button>
			  	</div>
			  </form>
			  
			</div>
			</div>
			</div>
		)
	}
}

const mapStateToProps =state =>({
	search:state.movies.search
})

export default connect(mapStateToProps, {searchMovie, fetchMovies,setLoading}) (Searchform);
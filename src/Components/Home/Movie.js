import React from 'react'
import {connect} from 'react-redux'
import {fetchMovie,setLoading} from '../../Actions/searchActions'
import {Link} from 'react-router-dom'
import Spinner from '../Layout/Spinner'

export class Movie extends React.Component {
	componentDidMount() {
		this.props.fetchMovie(this.props.match.params.id)
		this.props.setLoading()
	}

	render() {

		const {movie,loading}=this.props
		let movieInfo=(
			<div className="container mt-5">
		        <div className="row">
		          <div className="col-md-4 card card-body">
		            <img src={movie.Poster} className="thumbnail" alt="Poster" />
		          </div>
		          <div className="col-md-8">
		            <h2 className="mb-4">{movie.Title}</h2>
		            <ul className="list-group">
		              <li className="list-group-item">
		                <strong>Genre:</strong> {movie.Genre}
		              </li>
		              <li className="list-group-item">
		                <strong>Released:</strong> {movie.Released}
		              </li>
		              <li className="list-group-item">
		                <strong>Rated:</strong> {movie.Rated}
		              </li>
		              <li className="list-group-item">
		                <strong>IMDB Rating:</strong> {movie.imdbRating}
		              </li>
		              <li className="list-group-item">
		                <strong>Director:</strong> {movie.Director}
		              </li>
		              <li className="list-group-item">
		                <strong>Writer:</strong> {movie.Writer}
		              </li>
		              <li className="list-group-item">
		                <strong>Caste:</strong> {movie.Actors}
		              </li>
		            </ul>
		          </div>
		        </div>
		        <div className="row">
		          <div className="card card-body bg-dark my-5 text-light">
		            <div className="col-md-12">
		              <h3>Plot </h3>
		              {movie.Plot}
		              <hr />
		              <a
		                href={'https://www.imdb.com/title/'+movie.imdbID}
		                target="_blank"
		                rel="noopener noreferrer"
		                className="btn btn-primary"
		              >
		                View on IMDB
		              </a>
		                <Link to='/' className="btn btn-default text-light">
		                 Go Back To Search
		               </Link>
		            </div>
		          </div>
		        </div>
	      </div>
	     
		)

		let content=loading?<Spinner/>: movieInfo
		return <div>{content}</div>
	}
}

const mapStatetoProps=state=>({
	loading:state.movies.loading,
	movie:state.movies.movie
})

export default connect(mapStatetoProps,{fetchMovie,setLoading})(Movie)
import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			  <Link className="navbar-brand text-white" to='/'><h2>Movie and Series Info</h2></Link>
			  
			    
			  
			  <div className="collapse navbar-collapse" id="navbarNav" style={{display:'flex', justifyContent:'flex-end'}}>
			    <ul className="navbar-nav text-white">
			      <li className="nav-item text-white mr-4">
			       <i className='fab fa-imdb fa-5x '/>
			      </li>
			      <li className="nav-item text-white mr-4">
			        <i className='fab fa-react fa-5x '/>
			      </li>
			      
			      
			    </ul>
			  </div>
			</nav>
		</div>
	)
}

export default Navbar;
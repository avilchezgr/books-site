import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import BookPage from './BookPageComponent';
import FilteredListBook from './FilteredListBookComponent';


class Main extends Component{
	
	render(){
		return (
			<div className="main">
				<Header/>
				
				<Switch>
					<Route exact path="/libros" component={Home} />
					<Route path="/libros/:idBook" component={BookPage} />
					<Route path="/genero/novela" component={FilteredListBook} />
					<Redirect to="/libros"/>
				</Switch>
				
			</div>
		);
	}
	
}
export default Main;
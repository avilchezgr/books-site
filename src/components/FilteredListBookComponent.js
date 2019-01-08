import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BookList from './BookListComponent';

class FilteredListBook extends Component{
	
	render(){
			return(
			<div className="filteredListBook">
				<Paper>
					<Typography component="h2" variant="display3">
						Novelas
					</Typography>
				<BookList/>
				</Paper>
			</div>
			);
	}
	
	
}
export default FilteredListBook;
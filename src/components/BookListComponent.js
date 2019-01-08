
import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Novel from '../images/novela.jpg';
import GridList from '@material-ui/core/GridList';

const CardTest = () => {
	return (
		  <Card className="card">
		  <CardActionArea component={Link} to={'/libros/1'}>
				  
					<CardMedia
					  component="img"
					  alt="Contemplative Reptile"
					  
					  height="350px"

					  image={Novel}
					  title="Contemplative Reptile"
					/>
					<CardContent>
					  <Typography gutterBottom variant="h5" component="h2">
						EL ASESINATO DE PITÁGORAS 
					  </Typography>
					  <Typography component="p">
						El anciano filósofo Pitágoras, uno de los personajes con más poder de su época, está a punto de elegir un sucesor entre los grandes maestros cuando en su comunidad se inicia una serie de asesinatos. 
					  </Typography>
					</CardContent>
		
		  </CardActionArea>
		</Card>
	);
}


const BookList = () => {
	
	return(
		<div className="bookList">
			<GridList cols={4}>
				<CardTest/>
				<CardTest/>
				<CardTest/>
				<CardTest/>
				<CardTest/>
				<CardTest/>
				<CardTest/>
				<CardTest/>
				<CardTest/>
				<CardTest/>
				<CardTest/>
				
			</GridList>
		</div>
	);
}
export default BookList;

import React from 'react';
import Novel from '../images/novela.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';


const MyLink = props => <Link to="/libros" {...props} />

const BookPage = () => {
	return (
		<div className="bookPage">
		<Paper className="paperBookPage">
		<Grid container>
			
			<Grid item xs={4}>
			<div className="bookPageLeft">
				
				<img src={Novel} alt="Image" className="bookPageImg"/>
			</div>
			</Grid>
			<Grid item xs={8}>
				<div className="bookPageRight">
					<Typography component="h2" variant="display2" className="bookPageTypography" gutterBottom>
							El Asesinato de Pitagoras
						</Typography>
					<Typography component="h2" variant="title" className="bookPageTypography" gutterBottom>
						Autor: Marcos Chicot
					</Typography >
					<Typography component="h3" variant="subtitle" gutterBottom>
						Genero: Novela, Thriller
					</Typography>
					<Typography component="h3" variant="subtitle" gutterBottom>
						Valoracion: 4/5	
					</Typography>
					<Typography component="p" variant="p">
							El anciano filósofo Pitágoras, uno de los personajes con más poder de su época, está a punto de elegir un sucesor entre los grandes maestros cuando en su comunidad se inicia una serie de asesinatos. Tras los crímenes se atisba una mente oscura y 
							poderosa que parece superar al mismísimo Pitágoras. La enigmática Ariadna y el investigador egipcio Akenón tratarán de descubrir quién es el asesino a la vez que resuelven sus propios sentimientos. Un reto en el que los fantasmas del pasado se 
							unen a las oscuras amenazas del presente. Un viaje a la antigua Grecia donde descubrirás secretos inéditos y a los más inquietantes personajes.
					</Typography>
				</div>
				<Grid container direction="row" justify="flex-end">
				<Button style={{marginTop: 20}} component={Link} to="/home">
					<span>
						<SvgIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/><path fill="none" d="M0 0h24v24H0z"/></SvgIcon>				
					</span>
					<span>Lista de Libros</span>
				</Button>
				</Grid>
			</Grid>
				
				
		
				
			</Grid>
			</Paper>
		</div>
	);
}
export default BookPage;
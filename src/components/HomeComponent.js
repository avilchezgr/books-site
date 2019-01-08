import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Novel from '../images/novela.jpg';
import Essay from '../images/ensayo.jpg';
import Biography from '../images/biografia.jpg';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {Link} from 'react-router-dom';
import BookList from './BookListComponent';

const tileData = [
    {
      img: Novel,
      title: 'Novela'
    },
    {
     img: Essay,
	 title: 'Ensayo'
    },
	{
     img: Biography,
	 title: 'Biografia'
    },
  ];

function TabContainer(props) {
  return (
    <div style={{ padding: 8 * 3 }}>
      {props.children}
    </div>
  );
}



const Genres = () => {
	
	return (
	
		<GridList  cellHeight={400} cols={3}>
        {tileData.map(tile => (
		
          <GridListTile key={tile.img} >
		  <Link to="/genero/novela">
            <img src={tile.img} alt={tile.title} width="100%"/>
            <GridListTileBar
              title={tile.title}
              
            />
			</Link>
          </GridListTile>
		  
        ))}
      </GridList>
	
		
	
	);
	
}

class Home extends Component{
	render(){
		return(
			<div className="home">
				<SubMenu />
				
				<Paper className="listaRecientes">
					<Typography component="h2" variant="display2">
						Recientes
					</Typography>
					<BookList />
				</Paper>
			</div>
		);
	}
}

class SubMenu  extends Component{
	constructor(props){
		super(props);
		this.state = {value: 0};
	}
	handleChange = (event,value) =>{
		this.setState({value});
	}
	render(){
		const {value} = this.state;
		return (
			<div className="subMenu">
				
				<Paper> 
					
					<AppBar position="static">
					  <Tabs value={value} onChange={this.handleChange}>
						<Tab label="Generos" />
						<Tab label="Item 2" />
						<Tab label="Item Three" />
					  </Tabs>
					</AppBar>
						{value === 0 && <TabContainer><Genres/></TabContainer>}
						{value === 1 && <TabContainer>Item Two</TabContainer>}
						{value === 2 && <TabContainer>Item Three</TabContainer>}
					
				
				</Paper>
				
			
			</div>
			
		);
	}
}

export default Home;
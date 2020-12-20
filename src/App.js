import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import './App.css';
import avatar from './avatar.png';
import Home from './Home'
import CategoryList from './CategoryList';
import AppContext from './AppContext'

function App() {
	const [count, setCount ] = useState(0);
	useEffect( () => {
		const saved = localStorage.getItem( 'selectedItems');
		if ( ! saved ) {
			localStorage.setItem('selectedItems', JSON.stringify([]) );
		} else {
			setCount(JSON.parse(saved).length);
		}
	},[ count ]);

	return (
		<AppContext.Provider value={{count}}>
			<Router>
				<Box className="App">
					<AppBar position="sticky">
						<Toolbar className="App-header">
						<Avatar alt="William" src={avatar} />
							<Typography variant="h5">
								Count {count}/30
							</Typography>
							<Button
								variant="contained"
								color="secondary"
								onClick={() => {
									localStorage.clear();
									setCount(0);
								}}
								endIcon={<RotateLeftIcon/>}
							>
								Reset
							</Button>
						</Toolbar>
					</AppBar>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/category/:name">
							<CategoryList set={setCount}/>
						</Route>
					</Switch>
				</Box>
			</Router>
		</AppContext.Provider>
	);
}

export default App;

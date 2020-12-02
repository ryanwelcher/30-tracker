import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { useHistory } from 'react-router'    
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './App.css';
import Home from './Home'
import CategoryList from './CategoryList';
import AppContext from './AppContext'

function App() {
	const [count, setCount ] = useState(0);
	const history = useHistory();
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
							<Typography variant="h5">
								Count {count}/30
							</Typography>
							<Button onClick={() => {
								localStorage.clear();
								setCount(0);
							}}>Reset</Button>
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

import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';
import Home from './Home'
import CategoryList from './CategoryList';
import AppContext from './AppContext'
function App() {
	const [count, setCount ] = useState(0)
	const [ loading, setLoading] = useState( true );

	useEffect( () => {
		const saved = localStorage.getItem( 'selectedItems');
		if ( ! saved ) {
			localStorage.setItem('selectedItems', JSON.stringify([]) );
		} else {
			setCount(JSON.parse(saved).length);
		}
		setLoading(false);
	},[ count ]);


	if ( loading ) {
		return (
			<CircularProgress className="loader"/>
		);
	}

	

	
	return (
		<AppContext.Provider value={{count}}>
			<Router>
				<Box className="App">
					<AppBar position="sticky" className="App-header">
						Count {count}/30
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

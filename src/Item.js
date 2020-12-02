import React, { useState, useContext, useEffect } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import AppContext from './AppContext';

function Item( { name, set } ) {
	const [ selected, setSelected ] = useState( false );
	const { count } = useContext( AppContext )

	useEffect( () => {
		const existingItems = JSON.parse( localStorage.getItem( 'selectedItems' ) ) || [];
		if ( existingItems.includes(name) ) {
			setSelected( true );
		} else {
			setSelected( false );
		}
	},[name, count]);


	const setItemsInLocalStorage = () => {
		const existingItems = JSON.parse(localStorage.getItem( 'selectedItems' ) ) || [];
		if ( existingItems.includes(name) ) {
			const newList = existingItems.filter( (item) => {
				return item !== name
			});
			localStorage.setItem( 'selectedItems', JSON.stringify(newList) )
		} else {
			localStorage.setItem( 'selectedItems', JSON.stringify([...existingItems, name ]))
		}
		
	};

	const handleClick = () => {
		set( selected === true ? count - 1 : count +1  );
		setItemsInLocalStorage();
		setSelected( ! selected )
	}

	return(
	
		<ListItem
			divider
			button
			disableRipple
			disableTouchRipple
			selected={selected}
			onClick={handleClick}
		>
        	<ListItemText id="switch-list-label-wifi" primary={name} />
			<ListItemSecondaryAction>
				<Switch
					edge="end"
					onChange={handleClick}
					checked={selected}
					inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
				/>
			</ListItemSecondaryAction>
      </ListItem>
	);
}

export default Item;
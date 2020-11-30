import React from "react";
import { useHistory } from 'react-router'    
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
function CategoryButton({ text }) {
	const history = useHistory();
	return (
		<ListItem button className="category" divider onClick={() => history.push( `category/${text}`)}>
			<ListItemText primary={text}/>
		</ListItem>
	)
}

export default CategoryButton;
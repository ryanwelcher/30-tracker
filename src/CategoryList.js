import React, { Fragment } from 'react';
import {useParams} from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ListSubheader from '@material-ui/core/ListSubheader';


import Item from './Item';
import { itemlist } from './items';


const ListHeader =() => (
	<ListSubheader>
		<Button
			color="primary"
			variant="contained"
			startIcon={<ArrowBackIcon />}
			component={RouterLink} to="/"
		>
			Back
		</Button>
		<hr/>
	</ListSubheader>
)

function CategoryList( {set}) {
	let { name } = useParams();

	const sorted = itemlist[name].sort();
	const items = sorted.map((name) => <Item key={name} name={name} set={set}/> );
	return (
		<Fragment>
			<List className="categories" subheader={<ListHeader/>}>
				{ items }
			</List>
		</Fragment>
	)
}

export default CategoryList;
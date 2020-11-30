import React, { Fragment } from 'react';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import Item from './Item';
import { itemlist } from './items';

function CategoryList( {set}) {
	let { name } = useParams();

	const sorted = itemlist[name].sort();
	const items = sorted.map((name) => <Item key={name} name={name} set={set}/> );
	return (
		<Fragment>
			<Link to="/">Home</Link>
			<List className="categories" subheader={<ListSubheader>{name}</ListSubheader>}>
				{ items }
			</List>
		</Fragment>
	)
}

export default CategoryList;
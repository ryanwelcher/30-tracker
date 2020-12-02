import React, { Fragment } from 'react';
import {useParams} from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import Item from './Item';
import { itemlist } from './items';


const ListHeader =({name}) => (
	<ListSubheader>
		<Breadcrumbs>
			<Link component={RouterLink} to="/">List</Link>
			<Link component={RouterLink} to={`/category/${name}`}>{name}</Link>
		</Breadcrumbs>
	</ListSubheader>
)

function CategoryList( {set}) {
	let { name } = useParams();

	const sorted = itemlist[name].sort();
	const items = sorted.map((name) => <Item key={name} name={name} set={set}/> );
	return (
		<Fragment>
			<List className="categories" subheader={<ListHeader name={name}/>}>
				{ items }
			</List>
		</Fragment>
	)
}

export default CategoryList;
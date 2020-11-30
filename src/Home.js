import React from 'react';


import CategoryButton from './CategoryButton';

import List from '@material-ui/core/List';
function Home() {
	return (
		<List className="categories">
			<CategoryButton text="Fruit" />
			<CategoryButton text="Vegetables" />
			<CategoryButton text="Seeds & Nuts" />
			<CategoryButton text="Other" />
		</List>
	
	);
}
export default Home;
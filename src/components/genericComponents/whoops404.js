import React from 'react';

const Whoops404 = ({location}) => {
	return (
		<div>
			<h1>Sorry. Page not found</h1>
			<p>Could not find {location.pathname}</p>
		</div>
	);
}

export default Whoops404;
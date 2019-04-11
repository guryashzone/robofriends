import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input
			type="search"
			onChange={searchChange}
			className="pa3 ba b--green bg-lightest-blue"
			placeholder="Search robots"
			/>
		</div>
	);
}

export default SearchBox;
import React from 'react';

export default function Subcategory({ name }) {
	return (
		<>
			<option value={name}>{name}</option>
		</>
	);
}

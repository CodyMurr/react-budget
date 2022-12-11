import React from 'react';

export default function Category({ name, parent }) {
	return <option value={`${parent}: ${name}`}>{name}</option>;
}

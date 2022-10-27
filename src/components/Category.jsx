import React from 'react';

export default function Category({ name }) {
	return <option value={name}>{name}</option>;
}

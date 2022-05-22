import React, { memo } from 'react';

// Esta tarea es para evitar que este componente vuelva a realizar consultas http si sus propiedades son las mismas
// Con memo se vuelve a renderizar el componente solo si alguna propiedad ha cambiado
// También se puede llamar asi React.memo
export const Small = memo(({ value }) => {
	console.log('Re called :(');
	// http:?

	return <small>{value}</small>;
});

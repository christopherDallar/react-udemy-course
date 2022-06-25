export const startNewNote = () => {
	return async (dispatch) => {
		// uid

		console.log('====================================');
		console.log('startNewNote');
		console.log('====================================');

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		};

		// dispatch
		// dispatch( newNote )
		// dispatch( activarNote )
	};
};

import React from 'react';

export const JournalEntry = () => {
	return (
		<div className='journal__entry pointer'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR03OU2rWonuAywo6OoF05YCoNlnV74j6BLg&usqp=CAU',
				}}
			></div>

			<div className='journal__entry-body'>
				<p className='journal__entry-title'>Un nuevo día</p>
				<p className='journal__entry-content'>
					dsasdsadsa dsadsadsa dsadsadsad dsadsadsadsa dsadswa
				</p>
			</div>

			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};

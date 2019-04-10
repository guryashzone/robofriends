import React from 'react';
const Card  = ({ name,email,id }) => {
	return (
		<div className="bg-light-green dib code br3 pa3 ma2 grow bw2 shadow-1 tc">
			<img alt='robots-img'src={`https://robohash.org/${id}?180x180`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;
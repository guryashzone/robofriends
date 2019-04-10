import React from 'react';
const Card  = ({ name,email,id }) => {
	return (
		<div className="bg-dark-red dib br3 pa3 ma2 dim bw2 shadow-1 tc">
			<img alt='robots-img'src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;
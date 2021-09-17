import React from 'react';

const Photo = (props) => {
	return (
		<React.Fragment>
			<ul>
				<li>
					<img
						alt={props.title}
						src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_w.jpg`}
					/>
				</li>
			</ul>
		</React.Fragment>
	);
};

export default Photo;

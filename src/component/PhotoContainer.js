import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

export default class PhotoContainer extends Component {
	render() {
		const results = this.props.data;
		const photos = results.map((photo) => (
			<Photo
				server={photo.server}
				secret={photo.secret}
				id={photo.id}
				key={photo.id}
				title={photo.title}
			/>
		));

		return (
			<React.Fragment>
				<div className='photo-container'>
					<h2>Results</h2>
					<ul>{photos}</ul>
				</div>
			</React.Fragment>
		);
	}
}

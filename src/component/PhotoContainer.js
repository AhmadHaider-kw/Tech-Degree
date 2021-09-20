import React, { Component } from 'react';
import Photo from './Photo';

export default class PhotoContainer extends Component {
	componentDidUpdate() {
		if (this.props.searchText !== this.props.query) {
			this.props.SearchForPhoto(this.props.query);
		}
	}

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

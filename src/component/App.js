import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// api key
import apiKey from './config';

// import components
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import NotFound from './NotFound';

// main class component
export default class App extends Component {
	state = {
		photos: [],
		cats: [],
		dogs: [],
		computers: [],
	};

	componentDidMount() {
		this.defaultNavSearch('cats');
		this.defaultNavSearch('dogs');
		this.defaultNavSearch('computers');
	}
	SearchForPhoto = (query) => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
			)
			.then((response) => {
				this.setState({
					photos: response.data.photos.photo,
				});
			})
			.catch((error) => {
				console.log('there are an error babe...', error);
			});
	};

	defaultNavSearch = (query) => {
		axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
			)
			.then((response) => {
				if (query === 'cats') {
					this.setState({
						cats: response.data.photos.photo,
					});
				}
				if (query === 'dogs') {
					this.setState({
						dogs: response.data.photos.photo,
					});
				}
				if (query === 'computers') {
					this.setState({
						computers: response.data.photos.photo,
					});
				}
			});
	};
	render() {
		return (
			<BrowserRouter>
				<div className='container'>
					<SearchForm onSearch={this.SearchForPhoto} />
					<Nav />
					<Switch>
						<Route exact path='/' render={() => <Redirect to='/cats' />} />
						<Route
							exact
							path='/cats'
							render={() => <PhotoContainer data={this.state.cats} />}
						/>
						<Route
							exact
							path='/dogs'
							render={() => <PhotoContainer data={this.state.dogs} />}
						/>
						<Route
							exact
							path='/computers'
							render={() => <PhotoContainer data={this.state.computers} />}
						/>
						<Route
							exact
							path={`/search/:query`}
							render={() => (
								<PhotoContainer
									data={this.state.photos}
									SearchForPhoto={this.SearchForPhoto}
								/>
							)}
						/>
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router';
import { connect } from 'react-redux';

import { setPizzas } from './redux/actions/pizzas';
import { Header } from './components';
import { Home, Cart } from './pages';

// function App() {
// useEffect(() => {
// 	axios.get('http://localhost:3000/db.json').then(({ data }) => {
// 		setPizzas(data.pizzas);
// 	});
// }, []);

// 	return (

// 	);
// }

class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			this.props.setPizzas(data.pizzas);
		});
	}

	render() {
		return (
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home items={this.props.items} />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.pizzas.items,
		filters: state.filters,
	};
};

const mapDispatchToProps = {
	setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

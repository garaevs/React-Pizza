import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router';
import { setPizzas } from './redux/actions/pizzas';

function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		axios.get('http://localhost:3001/pizzas').then(({ data }) => {
			dispatch(setPizzas(data));
		});
	}, []);

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

// const mapStateToProps = state => {
// 	return {
// 		items: state.pizzas.items,
// 		filters: state.filters,
// 	};
// };

// const mapDispatchToProps = {
// 	setPizzas,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

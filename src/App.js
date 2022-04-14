import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import SinglePost from './components/SinglePost/SinglePost';

const App = () => {
	let location = useLocation();
	let state = location.state;

  	return (
	  <React.Fragment>
		<Header />
		<Routes location={state?.backgroundLocation || location}>
			<Route exact path='/' element={<Users />} />
			<Route path='/user-posts/:id' element={<Posts />} />
			<Route exact path='/posts/:id' element={<SinglePost />} />
			<Route path='/modal' element={<Modal />} />
		</Routes>
		{state?.backgroundLocation && (
			<Routes>
				<Route path='/modal' element={<Modal />} />
			</Routes>
		)}
	  </React.Fragment>
  	);
}

export default App;

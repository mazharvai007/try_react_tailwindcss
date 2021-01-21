import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Contact from './Views/Contact/Contact';

function App() {
	return (
		<div className='App'>
			<div>
				<Router>
					<Header />
					<div className='p-3'>
						<Switch>
							<Route exact path='/'>
								<Home />
							</Route>
							<Route path='/about'>
								<About />
							</Route>
							<Route path='/contact'>
								<Contact />
							</Route>
						</Switch>
					</div>
				</Router>
				<Footer />
			</div>
		</div>
	);
}

export default App;

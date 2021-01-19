import React from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld/HelloWorld';

function App() {
	return (
		<div className='App'>
			<div>
				<HelloWorld name='Jane' />
			</div>
		</div>
	);
}

export default App;

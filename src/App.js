import React from 'react';
import './App.css';
import CounterExample from './Components/CounterExample/CounterExample';
import HelloWorld from './Components/HelloWorld/HelloWorld';

function App() {
	return (
		<div className='App'>
			<div>
				{/* <HelloWorld name='Jane' /> */}
				<CounterExample />
			</div>
		</div>
	);
}

export default App;

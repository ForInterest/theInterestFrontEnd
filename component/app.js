//app
import React from 'react';
import Hello from './hello.js';
import Change from './change.js';

class App extends React.Component {
	constructor(props){

		super(props);
	}

	render(){
		return (
			<div> 
				<Hello />
				<Change />
			</div>
		);
	}
}

export default App;
//app
import React from 'react';
import Hello from './hello.js';
import Change from './change.js';

class App extends React.Component {
	constructor(props){

		super(props);
	}

	render(){
		const { actions, text} = this.props;
		return (
			<div> 
				<Hello actions = { actions } text = {text} />
				<Change actions = {actions} />
			</div>
		);
	}
}

export default App;
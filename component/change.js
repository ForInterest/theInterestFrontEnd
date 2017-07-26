import React from 'react';

class Change extends React.Component {
	constructor(props){
		super(props);
	}
    
	handleClick(){
		this.props.actions.buttonClick();
	}

	render(){
		return (
			<button onClick = { this.handleClick }> change </button>
		);
	}
}

export default Change;
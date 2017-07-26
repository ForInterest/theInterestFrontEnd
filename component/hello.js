import React from 'react';

class Hello extends React.Component {
	constructor (props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
    
	handleClick (){
		this.props.actions.changeText();
	}
    
	render(){
		return (
			<div onClick = { this.handleClick }> { this.props.text } </div>
		);
	}
}

export default Hello;
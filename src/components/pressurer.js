import React, { Component } from 'react';
import Pressure from 'pressure';

export default class Pressurer extends Component{
	componentDidMount(){
		Pressure.set( this.refs.press, {			
			change: (force,event)=>{
				this.setState({force});
				this.state.onChange(force);
			},
			end: ()=>{
				this.setState({force:0});
				this.state.onChange(0);
			},
			unsupported: ()=>{
				this.setState({force:null});
			}
		}, this.state.config?this.state.config:{}); 
	}

	constructor(props){
		super(props);
		if (!props.onChange) throw "Must pass 'onChange' callback!";
		this.state = { force: 0, onChange: props.onChange, config:props.config };
	}

	render(){
		return (
			<div ref="press">
				{this.props.children}
			</div>);
	}
}
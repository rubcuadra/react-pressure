import React, {Component} from 'react';
import Pressure from 'pressure';

// Valid configs
// {
//   polyfill: true,
//   polyfillSpeedUp: 1000,
//   polyfillSpeedDown: 0,
//   preventSelect: true,
//   only: null|'touch'|'mouse'|'pointer'
// }
function isMobile() {
  const testExp = new RegExp('Android|webOS|iPhone|iPad|' +
                  'BlackBerry|Windows Phone|'  +
                  'Opera Mini|IEMobile|Mobile','i');
  return testExp.test(navigator.userAgent);
}

export default function(ComposedComponent, configs=null){
	class Pressurer extends Component{
		componentDidMount(){
			if (configs) //Hot fix for some androids with chrome
				configs.only = configs.only?configs.only:(isMobile()?"touch":null)
			else 
				configs = {only:isMobile()?"touch":null};
			
			Pressure.set( this.refs.press, {
				start:(event)=>{
					this.setState({pressing:true});
				},			
				change: (force,event)=>{
					this.setState({force});
				},
				end: ()=>{
					this.setState({force:0,pressing:false});
				},
				unsupported: ()=>{
					if(configs.debug) console.warn("react-pressure: Unsupported device, verify 'only' devices");
					this.setState({force:0, pressing:false});
				}
			}, configs); 
		}

		constructor(props){
			super(props);
			this.state = { force: 0, pressing: false };
		}

		render(){
			return (
				<div ref="press">
					<ComposedComponent {...this.props} {...this.state}/>
				</div>);
		}
	}
	
	return Pressurer;
}
import React from 'react';
import { render} from 'react-dom';

import { Header } from "./components/Header";
import { Home} from "./components/Home";


class App extends React.Component{
	constructor(){
		super();
		this.state = {
			homeLink:"Home"
		}
	}
	onGreat(){
		alert('Greeeet');
	}
	onChangeLinkName(newName){
		this.setState({
			homeLink: newName
		});
	}
	render(){
		var user={
			name:'mahen',
			hobbies:['mora']		
		};
		return(
		<div className="container">
			<div className="col-xs-10 col-xs-offset-1">
			<Header homeLink={this.state.homeLink}/>
				hello React
			<Home 
			user={user} 
			place={'kurunegala'}
			initialAge={26} 
			greet={this.onGreat}
			changeLink={this.onChangeLinkName.bind(this)}
			>
			<p>1111111111111111111111</p>
			</Home>
			</div>
		</div>
		);
	}
}
render(<App/>,window.document.getElementById("app")); 
import React from "react";

export class Home extends React.Component {
	constructor(props){
		super();
		this.state = {
			age: props.initialAge,
			status:0,
			homeLink:"changeList"
		};
	}
	onMakeOlder(){
		this.setState({
			age: this.state.age +5
		});
		
	}
	onChangeLink(){
		this.props.changeLink(this.state.homeLink) 
	}
	render() {
		return ( 
		< div className="container" >
			< p > in a new component< /p> 
			<p>Age : {this.state.age}</p>
			<p>Status : {this.state.status}</p>
			<p>Place : {this.props.place}</p>
			<p>User :{this.props.user.name}</p>
			<p>Hobbies: {this.props.user.hobbies.map((hobbie,i) => <li key={i}>{hobbie}</li> )} </p>
			{this.props.children}
			<button className="btn btn-primary" onClick= {() => this.onMakeOlder()}>make old</button>
			<hr/>
			<button onClick={this.props.greet} className="btn btn-primary">Greets</button>
			<hr/>
			<button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>change name</button>	
				< /div>
		);
	}
}
Home.propTypes = {
	use: React.PropTypes.object,
	children: React.PropTypes.element.isRequired,
	greet: React.PropTypes.func
//	initialAge: React.PropType.number
};
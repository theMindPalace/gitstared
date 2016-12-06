import React, {Component} from 'react';

export default class Gitrepository extends Component {

	constructor(props) {
		super(props);
		
	}	

	render(){
		return(<div className="ReposwitoryCard">

				<strong>{this.props.repodata.name} </strong> <span> ({this.props.repodata.language})</span>
				<div> Stars : {this.props.repodata.stargazers_count} </div>
				<div>
					{this.props.repodata.description}
				</div>
		</div>);
	}
}
import React, {Component} from 'react';
import Gitrepository  from './Gitrepository';

import axios from 'axios';

export default class Gitstarlist extends Component {

	constructor(props) {
		super(props);
		this.state = {stared_repos:[]}
		
	}

	componentDidMount() {
		let self = this;
		axios.get('https://api.github.com/users/saratonite/starred')
		  .then(function (response) {
		    self.setState({'stared_repos':response.data});
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	repoList(){
		return this.state.stared_repos.map(repo=>{
			return <Gitrepository key={repo.id} repodata={repo}></Gitrepository>
		})
	}	

	render(){
		return(<div>
			<h4>StarList</h4>
			{this.repoList()}
		</div>);
	}
}
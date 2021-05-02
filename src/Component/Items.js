import React,{Component} from 'react';
import style from './Items.module.css';

class Items extends Component{

	// creat state that contain all data
	state = {
			languages : [
				{name: "Php", votes: 0},
				{name: "Python", votes: 0},
				{name: "Go", votes: 0},
				{name: "Java", votes: 0}
			]
		}
	
	// onclick event 
	vote (i) {
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
		this.setState({languages: newLanguages});
		
	}

	// content 
	render(){
		return(
			
			// SIT CONTENT  &ADD MAP EVENT TO DISPLY DATA FROM STATE
			<>
			
				<h1>Vote Your Language!</h1>
				
				<div className={style.languages}>

					{
						this.state.languages.map((languages, i) => 
							<div key={i} className={style.language}>
								<div className={style.voteCount}>
									{languages.votes}
								</div>
								<div className={style.languageName}>
									{languages.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}

export default Items;
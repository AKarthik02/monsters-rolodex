import './App.css';
import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			monsters: [
				
			],
		};
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respnse => respnse.json())
      .then(users => this.setState({ monsters: users }))
  }

	render() {
		return (
			<div className='App'>
				{this.state.monsters.map((monster) => (
					<h1 key={monster.id}> {monster.name}</h1>
				))}
			</div>
		);
	}
}

export default App;

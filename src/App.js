import React from 'react';
import MainNav from './components/genericComponents/nav';


const App = () => (
		// console.log(this.props.params)
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Doing Done</h1>
				<MainNav props={this.props} />
			</header>
			<scheduledItems />
		</div>
)

export default App;

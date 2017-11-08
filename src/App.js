import React from 'react';
import MainNav from './components/genericComponents/nav';
import VisibleScheduledItems from './components/scheduledItems/scheduledItemsContainer';


const App = () => (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Doing Done</h1>
				<MainNav />
			</header>
			<VisibleScheduledItems  />
		</div>
)

export default App;

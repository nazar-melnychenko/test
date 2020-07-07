import React from 'react';
import './App.sass';
import {Provider} from "react-redux";
import store from "./redux/store";
import QuestionsContainer from "./components/Questions/QuestionsContainer";

function App() {
	return (
		<div className="wrapper">
			<Provider store={store}>
				<QuestionsContainer/>
			</Provider>
		</div>
	);
}

export default App;

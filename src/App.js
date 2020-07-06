import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import QuestionsContainer from "./components/Questions/QuestionsContainer";

function App() {
  return (
    <Provider store={store}>
      <QuestionsContainer />
    </Provider>
  );
}

export default App;

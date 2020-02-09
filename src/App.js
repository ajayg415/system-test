import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Main from './components/Main/Main';
import logo from './logo.svg';
import { Data } from './MOCK_DATA';
import './App.css';

import { fetchTodos } from './store/actions/actions';

const App = props => {
  const { dispatch, setData }  = props;
  useEffect(()=>{
    //TODO: Make async call to fetch todos data
    //dispatch(fetchTodos([{a:1, b:2}]))
    setData(Data);
  },[]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Main/>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setData : data => dispatch(fetchTodos(data))
})

export default connect(null, mapDispatchToProps)(App);

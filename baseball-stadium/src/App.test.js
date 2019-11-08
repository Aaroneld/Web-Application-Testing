import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App><Display /></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});

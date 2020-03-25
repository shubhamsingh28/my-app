import React from 'react';
import ReactDOM from 'react-dom';
import Covid from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Covid />, div);
  ReactDOM.unmountComponentAtNode(div);
});

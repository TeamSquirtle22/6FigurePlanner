import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../components/App'
class Welcome extends React.Component {
  render() {
    return <h1>Hello World from React boilerplate</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));

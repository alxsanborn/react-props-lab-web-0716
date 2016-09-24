const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');

ReactDOM.render(
  <Spaceship name="Millennium Falcon" speed =100 hasRockets=true colors=["yellow", "red", "blue"]/>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!

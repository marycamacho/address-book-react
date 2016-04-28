var React = require('react');
var ReactDom = require('react-dom');
var ToDo = require('./ToDo');

ReactDom.render(<ToDo name="hey" />, document.getElementById('app'));
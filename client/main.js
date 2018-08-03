import { Meteor } from 'meteor/meteor'

import React from 'react'
import ReactDOM from 'react-dom'

import App from '../imports/ui/App'
import './main.html'


Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'))
})

// import { ReactiveVar } from 'meteor/reactive-var';
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

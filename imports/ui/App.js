import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Tasks } from '../api/tasks'

export class _App extends Component {

  render() {
    return (
      <div>
		  Hello World
          {/* this.props.tasks */}
      </div>
    )
  }
}

// put synchronized tasks into props
export default withTracker(() => {
  Meteor.subscribe('tasks')

  return {
    tasks: Tasks.find({}).fetch()
  }
})(_App)
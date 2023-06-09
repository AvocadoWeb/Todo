import { Component } from 'react'

import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onAddedItem(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
      </form>
    )
  }
}

NewTaskForm.defaultProps = {
  onLabelChange: () => {},
  onSubmit: () => {},
}

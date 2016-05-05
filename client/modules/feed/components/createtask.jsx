import React from 'react'

class CreateTask extends React.Component {
  render() {
    const {error} = this.props
    return (
      <div className="new-task">
        <h2>Add New Task</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <textarea ref="descriptionRef" placeholder="Enter your task content." /> <br/>
        <button onClick={this.createTask.bind(this)}>Add New</button>
      </div>
    )
  }

  createTask() {
    const {create} = this.props.actions
    const {descriptionRef} = this.refs

    create(descriptionRef.value)
  }
}

export default CreateTask


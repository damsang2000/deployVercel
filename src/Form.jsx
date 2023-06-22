import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      job: 'it',
      fruit: false
    }
  }
  handleChange = (event) => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>user name</label>
          <input type='text' name='username' onChange={this.handleChange} value={this.state.username} />
          <input type='submit' value='Submit' />
        </div>
        <div>
          <select value={this.state.job} name='job' onChange={this.handleChange}>
            <option value='it'>IT</option>
            <option value='education'>Education</option>
            <option value='economic'>Economic</option>
            <option value='tranform'>Tranform</option>
          </select>
        </div>
        <div>
          <input type='checkbox' name='fruit' checked={this.state.fruit} onChange={this.handleChange} />
        </div>
      </form>
    )
  }
}

export default Form

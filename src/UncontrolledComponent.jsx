import React, { Component, createRef } from 'react'

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
    this.inputFile = createRef()
    this.state = {
      file: null
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    console.log(this.input.current.value)

    //gửi file lên bằng formData
    const formData = new FormData()
    formData.append('myfile', this.state.file, this.state.file.name)
  }
  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0]
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>username</label>
          <input type='text' ref={this.input} />
          <input type='file' ref={this.inputFile} onChange={this.onFileChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default UncontrolledComponent

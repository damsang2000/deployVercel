import React, { Component } from 'react'

const fetchComment = () =>
  new Promise((resolve, reject) => {
    setInterval(() => resolve(['string', 'number', 'boolean']), 1000)
  })

export class CorrectlyState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      comment: []
    }
  }
  componentDidMount() {
    this.setState({
      count: this.state.count + 1
    })
    // vì class component có cơ chế merge state nên ta không cần khai báo lại state trong setState
    fetchComment().then((res) => {
      this.setState({
        comment: res
      })
    })
  }
  render() {
    console.log(this.state)
    return <div>CorrectlyState Count:{this.state.count}</div>
  }
}

export default CorrectlyState

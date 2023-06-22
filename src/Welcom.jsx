import React from 'react'
//function component
// function Welcom() {
//   return <h1>Hello world</h1>
// }

// class component

class Welcom extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

export default Welcom

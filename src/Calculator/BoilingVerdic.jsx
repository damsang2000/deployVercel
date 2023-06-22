import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class BoilingVerdic extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div>
        {this.props.celsius >= 100 ? 'The water would boild' : 'The water would not boild '}
      </div>
    )
  }
}
BoilingVerdic.propTypes = {
  celsius: PropTypes.number.isRequired
}

export default BoilingVerdic

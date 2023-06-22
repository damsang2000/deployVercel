import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class TemperatureInput extends Component {
  render() {
    const { title, temperature, handleChange } = this.props
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {title}</legend>
          <input type='text' value={temperature} onChange={handleChange} />
        </fieldset>
      </div>
    )
  }
}
TemperatureInput.propTypes = {
  title: PropTypes.string.isRequired,
  temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func.isRequired
}

export default TemperatureInput

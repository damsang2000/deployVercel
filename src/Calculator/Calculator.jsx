import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdic from './BoilingVerdic'
const scaleNames = {
  c: 'celsius',
  f: 'fahrenheit'
}

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8
}
const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
}

const temperatureConvert = (temperature, convertFunc) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  let output = convertFunc(input)
  output = Math.round(output * 1000) / 1000
  return output
}

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: '',
      scale: 'c'
    }
  }
  handleChange = (scale) => (event) => {
    console.log(event.target.value)
    this.setState({
      temperature: event.target.value,
      scale
    })
  }
  render() {
    const { temperature, scale } = this.state
    const celsius = scale === 'f' ? temperatureConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? temperatureConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <TemperatureInput
          title={scaleNames.c}
          temperature={celsius}
          handleChange={this.handleChange('c')}
        />
        <TemperatureInput
          title={scaleNames.f}
          temperature={fahrenheit}
          handleChange={this.handleChange('f')}
        />
        <BoilingVerdic celsius={Number(celsius)} />
      </div>
    )
  }
}

export default Calculator

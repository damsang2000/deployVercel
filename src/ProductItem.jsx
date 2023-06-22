import React, { Component } from 'react'

export class ProductItem extends Component {
  render() {
    return (
      <ul>
        {this.props.productList.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    )
  }
}

export default ProductItem

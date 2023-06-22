import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: [
        {
          id: 1,
          name: 'Iphone'
        },
        {
          id: 2,
          name: 'Samsung'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <ul className='product_list'>
          <ProductItem productList={this.state.productList} />
        </ul>
      </div>
    )
  }
}

export default ProductList

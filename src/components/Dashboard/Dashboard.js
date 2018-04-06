import React, { Component } from 'react';
import Product from '../Product/Product.js';
import axios from 'axios';
// import Form from '../Form/Form.js';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      name: '',
      price: '',
      imageurl: '',
      productid: ''
    }
  }

  componentDidMount() {
    axios.get('/api/products').then(res => {
      console.log("get res--->", res)
      this.setState({
        products: res.data
      })
    });
  }

  addProduct = () => {
    axios.post('/api/product').then(res => {
      this.setState({
        name: res.data,
        price: res.data,
        imageurl: res.data
      })
    })
  }

  render() {
    let newProduct = this.state.products.map((product, i) => {
      const { name, price, imageurl, productid } = product;
      return (
        <Product name={name} price={price} imageurl={imageurl} />
      )
    });

    return (
      <div>
        {newProduct}
      </div>
    )
  }
}


export default Dashboard;
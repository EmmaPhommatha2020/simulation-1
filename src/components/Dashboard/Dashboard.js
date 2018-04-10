import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Product from '../Product/Product.js';
// import Form from '../Form/Form.js';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      name: '',
      price: '',
      imageurl: '',
      productid: '',
      product: [],
      componentSwitch: true,
    }
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  componentDidMount() {
    axios.get('/api/products').then(res => {
      // console.log("get res--->", res)
      this.setState({
        products: res.data
      })
    });
    axios.get(`/api/product/${1}`).then(res => {
      // console.log("get ONE res productid--->", res.data[0].productid)
      this.setState({
        product: res.data[0]
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

  updateProduct = (name, price, imageurl, productid) => {
    axios.put(`/api/product/${productid}`, { name: name, price: price, imageurl: imageurl }).then(res => {
      // console.log("put res--->", res.data)
      this.setState({
        products: res.data
      })
    })
  }

  deleteProduct(id) {
    console.log(id)
    axios.delete(`/api/product/${id}`).then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  handleChangeName = (e) => {
    const { value } = e.target
    this.setState({
      name: value
    })
  }

  handleChangePrice = (e) => {
    const { value } = e.target
    this.setState({
      price: value
    })
  }

  handleChangeImgURL = (e) => {
    const { value } = e.target
    this.setState({
      imageurl: value
    })
  }

  render() {
    console.log(this.props.match, 'MATCH');
    const { products, name, price, imageurl, product, componentSwitch } = this.state;
    
    let newProduct = products.map((product, i) => {
      const { name, price, imageurl, productid } = product;
      return (
        <Product deleteProduct={this.deleteProduct} name={name} price={price} imageurl={imageurl} product={product} productid={productid} />
      )
    });
    if (product) {
      console.log('product in state', product);
    }
    return (
      <div>
        {/* <div>
          <h2>Edit</h2>
          <input onChange={(e) => this.handleChangeImgURL(e)} type="text" name="imgURL" placeholder="imgURL" />
          <input onChange={(e) => this.handleChangeName(e)} type="text" name="productName" placeholder="productName" />
          <input onChange={(e) => this.handleChangePrice(e)} type="text" name="price" placeholder="price" />
          <button type="submit" onClick={() => this.updateProduct(name, price, imageurl, product.productid)}>Edit</button>
        </div> */}
        {newProduct}
      </div>
    )
  }
}


export default Dashboard;
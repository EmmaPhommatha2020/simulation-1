import React, { Component } from 'react';
import axios from 'axios';
import './style.css'


class Form extends Component {
  constructor() {
    super()
    this.state = {
      product: [],
      name: '',
      price: '',
      imageurl: '',
      productid: ''
    }
  }

  componentDidMount() {
    axios.get('/api/products').then(res => {
      this.setState({
        products: res.data,
      })
    });
  }

  addProduct(name, price, imageurl) {
    axios.post('/api/product', { name: name, price: price, imageurl: imageurl }).then(res => {
      this.setState({
        products: res.data,
        name: '',
        price: '',
        imageurl: ''
      })
    })
  }

  updateProduct(name, price, imageurl, productid) {
    axios.put(`/api/product/${productid}`, { name: name, price: price, imageurl: imageurl }).then(res => {
      // console.log("put res--->", res.data)
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
    const { products, name, price, imageurl } = this.state;
    
    return (
      <div className="form">
        <div className="form_img">

        </div>
        <div>
          <h4>Image URL: </h4>
          <input onChange={(e) => this.handleChangeImgURL(e)} type="text" name="imgURL" value = {this.state.imageurl}/>
          <h4>Product Name: </h4>
          <input onChange={(e) => this.handleChangeName(e)} type="text" name="productName" value = {this.state.name}/>
          <h4>Price: </h4>
          <input onChange={(e) => this.handleChangePrice(e)} type="text" name="price" value = {this.state.price}/>
        </div>
        <div className="add_inventory">
          <button className="add" type="submit">cancel</button>
          <button className="add" type="submit" onClick={() => this.addProduct(name, price, imageurl)}>Add to Inventory</button>
        </div>
      </div>
    )
  }
}
export default Form;
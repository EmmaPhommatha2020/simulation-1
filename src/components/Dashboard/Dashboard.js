import React, { Component } from 'react';
import Product from '../Product/Product.js';
import axios from 'axios';
// import { Link } from 'react-router-dom'


class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      name:'',
      price:'',
      imageurl:''
    }
  }

  componenDidMount(){
    axios.get('http://localhost:4000/api/products').then(res =>{
      console.log("get products--->", res)
    })
  }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Dashboard;
import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
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

export default Form;
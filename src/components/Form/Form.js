import React, { Component } from 'react';
import axios from 'axios';


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
    axios.put('/api/product/:id').then(res => {
      this.setState({
        product: res.data
      })
    });
  }


  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Form;
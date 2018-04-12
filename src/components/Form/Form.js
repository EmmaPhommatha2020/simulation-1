import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';


class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: '',
      imageurl: '',
      productid: ''
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    axios.get(`/api/product/${id}`).then(res => {
      const data = res.data[0];

      this.setState({
        name: data.name,
        price: data.price,
        imageurl: data.imageurl,
      })
    });
  }


  addProduct = (name, price, imageurl) => {
    axios.post('/api/product', { name: this.state.name, price: this.state.price, imageurl: this.state.imageurl })
  }

  updateProduct() {
    let id = this.props.match.params.id
    let info = { name: this.state.name, price: this.state.price, imageurl: this.state.imageurl }
    axios.put(`/api/product/${id}`, info);
  }

  handleChangeImgURL = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const { products, name, price, imageurl } = this.state;
    return (
      <div className="form">
        <div className="form_img">
          <img className="img_in_from" src={imageurl} alt='Image_URL' />
        </div>
        <div>
          <h4>Image URL: </h4>
          <input onChange={(e) => this.handleChangeImgURL(e)} type="text" name="imageurl" value={this.state.imageurl} />
          <h4>Product Name: </h4>
          <input onChange={(e) => this.handleChangeImgURL(e)} type="text" name="name" value={this.state.name} />
          <h4>Price: </h4>
          <input onChange={(e) => this.handleChangeImgURL(e)} type="text" name="price" value={this.state.price} />
        </div>
        <div className="add_inventory">
          <button className="add" type="submit" onClick={() => this.setState({ name: '', imageurl: '', price: '' })}>cancel</button>

          <Link to="/">
            {
              this.props.match.path === '/edit/:id'
                ?
                <button className="add" type="submit" onClick={() => this.updateProduct(name, price, imageurl)}> Save changes</button>
                :
                <button className="add" type="submit" onClick={() => this.addProduct(name, price, imageurl)}>Add to Inventory</button>
            }
          </Link>

        </div>
      </div>
    )
  }
}
export default Form;

// {
//   this.state.name
//     ?
//     <button className="add" type="submit" onClick={() => this.updateProduct(name, price, imageurl)}> Save changes</button>
//     :
//     <button className="add" type="submit" onClick={() => this.addProduct(name, price, imageurl)}>Add to Inventory</button>


// }
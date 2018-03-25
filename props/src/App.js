import React, {Component} from 'react';
import './App.css';
import Product from './components/Product';
class App extends Component {

  constructor(props) {
    super(props);
    this.onAddProduct = this
      .onAddProduct
      .bind(this);
  }

  onAddProduct() {
    console.log(this.refs);
  }

  onClick() {
    console.log("Bạn vừa click vào button");
  }

  render() {
    var products = [
      {
        name: 'Iphone 6 plus',
        price: 1500000,
        status: true
      }, {
        name: 'Iphone 7 plus',
        price: 1600000,
        status: true
      }, {
        name: 'Iphone 8 plus',
        price: 1700000,
        status: true
      }, {
        name: 'Iphone X',
        price: 1800000,
        status: false
      }
    ]
    var elements = products.map((product, item) => {
      if (product.status) 
        return <Product key={item} name={product.name} price={product.price}/>
      else 
        return ''
    })
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Props - Event - Refs - State</a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="row">

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">Thêm sản phẩm</h3>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label htmlFor="">Tên sản phẩm</label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Input field"
                        ref="name"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>
                      Lưu
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elements}
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <button type="button" className="btn btn-warning" onClick={this.onClick}>
                    Click Me !
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
// import Product from './components/Product';
import User from './components/User';
class App extends Component {

  constructor(props) {
    super(props);
    this.onSetState = this
      .onSetState
      .bind(this);
    this.state = {
      products: [
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
      ],
      isActive: true
    }
  }

  onSetState() {
    if (this.state.isActive) 
      this.setState({isActive: false})
    else 
      this.setState({isActive: true})
  }

  render() {
    var elements = this
      .state
      .products
      .map((product, item) => {
        let result = '';
        if (product.status) 
          result = <tr key={item}>
            <td>{item}</td>
            <td>{product.name}</td>
            <td>
              <span className="label label-success">{product.price}</span>
            </td>
          </tr>
        return result;
      })
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Props - Event - Refs - State</a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="row">

              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {elements}
                </tbody>
              </table>

              <button type="button" className="btn btn-danger" onClick={this.onSetState}>
                Active: {this.state.isActive === true
                  ? 'true'
                  : 'false'}
              </button>

            </div>
          </div>
          <hr/>
          <div className="row">
            <User/>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
class Product extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img data-src="" alt="iphone" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4987/4987604_sa.jpg;maxHeight=640;maxWidth=550" />
          <div className="caption">
            <h3>Iphone 6 plus</h3>
            <p>
              16.000.000đ
            </p>
            <p>
              <a className="btn btn-primary">Mua hàng</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

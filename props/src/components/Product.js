import React, {Component} from 'react';

class Product extends Component {

    constructor(props) {
        super(props)
        this.onAddToCart1 = this
            .onAddToCart1
            .bind(this);
    }

    onAddToCart1() {
        console.log(this.props.name);
    }

    onAddToCart2 = () => {
        console.log(this.props.name);
    }

    onAddToCart3(text) {
        console.log(text, this.props.name);
    }

    render() {
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img data-src="#" alt=""/>
                        <div className="caption">
                            <h3>{this.props.name}</h3>
                            <p>
                                {this.props.price}
                            </p>
                            <p>
                                <a  className="btn btn-primary" onClick={this.onAddToCart1}>
                                    Mua ngay 1
                                </a>
                                <a  className="btn btn-danger" onClick={this.onAddToCart2}>
                                    Mua ngay 2
                                </a>
                                <a
                                    
                                    className="btn btn-success"
                                    onClick={() => {
                                    this.onAddToCart3('thanhtt')
                                }}>
                                    Mua ngay 3
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;

import React , {Component} from 'react';
import { Link } from 'react-router-dom'
import './product-list.component.css'
class ProductListHero extends React.Component{
    
constructor(props){
    super(props)
}

    render(){
        
        return (
           
        <div>
            <div className="product">
                <div className="product-thumb">
                    <img className="img-responsive" src={require('../../media/album/1.jpg')} alt="Product Thumb"/>
                    <div className="product-thumb-hover">
                        <div className="btn-cart"><Link>Add to Cart</Link></div>
                    </div>
                </div>
                <div className="product-detail">
                    <h4 className="product-name">Music Album</h4>
                    <p className="product-price">$15</p>
                      <div className="detail"> 
                       {this.props.children}
                     </div>   
                </div>
            </div>

		</div>
           
           
        );
    }
}

export default ProductListHero;





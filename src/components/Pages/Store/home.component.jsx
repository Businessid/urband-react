import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAt,faMapMarkerAlt,faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import  FilterLeft  from '../Store/filter.component'

class ShopHome extends React.Component{

    render(){
        
        return (

			<div>
                <section className="page-header artist-banner">
                    <div className="tim-container">
                        <div className="page-header-title text-center">
                            <h3>Store</h3>
                            <h2>Feel our Shop</h2>
                        </div>

                        <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Store</span>
                        </div>

                    </div>
            </section>

                <section className="shop site-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4">
                                <aside id="product-price" className="widget widget-shop widget_price">
                                    <h3 className="widget-title-shop">Filter by</h3>
                                    <FilterLeft/>
                                    
                                </aside>
                            </div> 

                            <div className="col-xl-8 col-lg-9 col-md-9">
                                <div className="product-top-menu">
                                    <div className="product-menu-wrapper">
                                        <span>Short By</span>
                                        <select id="product-short" class="product-select">
                                            <option value="">Featured</option>
                                            <option value="january">Best Selling</option>
                                            <option value="march">Price, high to low</option>
                                        </select>
                                        
                                    </div>
                                </div>        
                              
                            <div className="row products">
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <img className="img-responsive" src={require('../../../media/album/1.jpg')} alt="Product Thumb"/>
                                            <div className="product-thumb-hover">
                                                <div className="btn-cart"><Link>Add to Cart</Link></div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h4 className="product-name">Music Album</h4>
                                            <p className="product-price">$15</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <img className="img-responsive" src={require('../../../media/album/5.jpg')} alt="Product Thumb"/>
                                            <div className="product-thumb-hover">
                                            <div className="btn-cart"><Link>Add to Cart</Link></div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h4 className="product-name">Music Album</h4>
                                            <p className="product-price">$15</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <img className="img-responsive" src={require('../../../media/album/3.jpg')} alt="Product Thumb"/>
                                            <div className="product-thumb-hover">
                                            <div className="btn-cart"><Link>Add to Cart</Link></div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h4 className="product-name">Music Album</h4>
                                            <p className="product-price">$15</p>
                                        </div>
                                    </div>
                                </div>
                            </div>    

                            </div>
                           
                        </div>  
                    </div> 
                </section>          
                  
			

			</div>	

           
           
        );
    }
}

export default ShopHome;




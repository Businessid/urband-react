import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StoreHeader from '../../StoreHeader/header.component'
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
// import '../../ListingGrid/'

library.add(faPlay)

class AlbumHome extends Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const image_url = "http://167.71.231.3/storage/"
        const albums = this.props.albums;
        console.log("yyyyyyy", albums);

        return (

            <div>
                <section className="page-header artist-banner">
                    <div className="tim-container">
                        <div className="page-header-title text-center">
                            <h2>Album List</h2>
                        </div>

                        <div className="breadcrumbs">
                            <Link to="/index">Home</Link>
                            <span>/</span>
                            <span>Albums</span>
                        </div>
                    </div>
                </section>


                <section className="section-hero">
                    <div className="container">
                        <div className="row album-listing">
                            <StoreHeader />

                            {albums.length > 0
                                ? albums.map(item => {
                                    return (
                                        <div className="product" key={item.id}>
                                            <div className="product-thumb">
                                                <img className="img-responsive" src={image_url + item.image} alt="Product Thumb" />
                                                {/* <Link to={'/albums/detail/heaven/${item.id}'} className="play-btn-round"><FontAwesomeIcon icon={faPlay} /></Link> */}
                                                {/* <div className="product-thumb-hover">
                                                    <div className="btn-cart"><Link to="/">Add to Cart</Link></div>
                                                </div> */}
                                                <Link
                                                    to={{
                                                        pathname: `/albums/detail/heaven/${item.id}`
                                                    }} className="play-btn-round"><FontAwesomeIcon icon={faPlay} /></Link>
                                            </div>
                                            <div className="product-detail">
                                                <h4 className="product-name">Music Album</h4>
                                                <div>By <b>{item.title}</b></div>
                                                <div>Released on <b>{item.created_at}</b></div>

                                            </div>
                                        </div>
                                    );
                                })
                                : ""}
                            {/* {this.state.artist.map((item) =>
                                <div className="col-md-3 col-sm-6 col-12 artist-thump" key={item.id}>
                                    <ProductListHero
                                    >
                                        <div>By <b>{item.name}</b></div>
                                        <div>Released on <b>{item.released}</b></div>
                                        <Link to={"/albums/detail/heaven"} className="play-btn-round"><FontAwesomeIcon icon={faPlay} /></Link>
                                    </ProductListHero>
                                </div>
                            )} */}



                        </div>
                    </div>
                </section>
            </div>


        );
    }
}
const mapDispatchToProps = dispatch => {
    // call action functions
    return {
        fetchAlbums: () => dispatch(actionCreators.fetchAlbums())
    };
};

const mapStateToProps = state => {
    return {
        albums: state.albums.items
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumHome);







import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DetailHero from '../../Pages/Music/detail.component'
import PlayerHero from '../../Pages/Music/player.component';
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class AlbumDetail extends Component {
    componentDidMount() {
        let albumid = this.props.location.pathname.split('/').pop();
        this.props.fetchAlbumsDetails(albumid);
    }

    render() {
        const album = this.props.album;
        return (

            <div>
                <section className="page-header artist-banner">
                    <div className="tim-container">
                        <div className="page-header-title text-center">
                            <h2>{album.title}</h2>
                        </div>

                        <div className="breadcrumbs">
                            <Link to="/album-detail">Home</Link>
                            <span>/</span>
                            <span><Link to="/albums">Album</Link></span>
                            <span>/</span>
                            <span>Brack Up</span>
                        </div>

                    </div>
                </section>

                <DetailHero value={album} />
                <div className="album-player">
                    <PlayerHero value={album}>

                    </PlayerHero>

                </div>



            </div>


        );
    }
}


const mapDispatchToProps = dispatch => {
    // call action functions
    return {
        fetchAlbumsDetails: (albumid) => dispatch(actionCreators.fetchAlbumsDetails(albumid))
    };
};

const mapStateToProps = state => {
    return {
        album: state.albumdetails.items
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumDetail);








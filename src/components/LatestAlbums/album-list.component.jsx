
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './album-list.component.css'
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";
class albumListHome extends Component {

     componentDidMount() {
          this.props.fetchAlbums();
     }

     render() {
          const image_url = "http://167.71.231.3/storage/"
          const albums = this.props.albums;
          return (
               <section className="three-d-album">
                    <div className="section-title style-four">
                         <h2>TRENDING ALBUMS</h2>
                         <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour.</p>
                    </div>

                    <div className="three-d-album-width">
                         <div className="row">
                              <div className="threed-container-wrapper">
                                   <div className="threed-container-inner">
                                        <div className="single-3d empty-space">
                                        </div>

                                        {albums.length > 0
                                             ? albums.map(item => {
                                                  return (
                                                       <div className="single-3d" key={item.id}>
                                                            <Link to="/albums"><img src={image_url + item.image} alt="" /></Link>
                                                       </div>
                                                  );
                                             })
                                             : ""}

                                   </div>
                              </div>

                         </div>
                    </div>
               </section>

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
)(albumListHome);


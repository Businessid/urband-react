import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

class Artist extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const image_url = "http://167.71.231.3/storage/"
    const posts = this.props.posts;
    return (
      <div>
        <section className="page-header artist-banner">
          <div className="tim-container">
            <div className="page-header-title text-center">
              <h2>Artists</h2>
            </div>

            <div className="breadcrumbs">
              <Link to="/index">Home</Link>
              <span>/</span>
              <span>Artists</span>
            </div>
          </div>
        </section>

        <section id="about-two" className="section-padding">
          <div className="tim-container">
            <div className="artist-timeline">
              {posts.length > 0
                ? posts.map(item => {
                  const about = atob(item.about);
                    return (
                      <div className="row no-gutters artist-row" key={item.id}>
                        <div className="col-lg-6">
                          <div className="artist-about pr__30">
                            <h3 className="artist-name">{item.name}</h3>
                            <h6>{item.genre}</h6>
                            <span>
                              Album: Rockstar, first rain, Love Song (More)
                            </span>

                            <div
                              className="content"
                              dangerouslySetInnerHTML={{ __html: about }}
                            ></div>
                            <h4 className="alb-title">Album & Single</h4>
                            <div className="alb-single">
                              <Link to="" className="single-items">
                                <img
                                  src={require("../../media/about/6.jpg")}
                                  alt="album"
                                />
                              </Link>
                              <Link to="" className="single-items">
                                <img
                                  src={require("../../media/about/7.jpg")}
                                  alt="album"
                                />
                              </Link>
                              <Link to="" className="single-items">
                                <img
                                  src={require("../../media/about/8.jpg")}
                                  alt="album"
                                />
                              </Link>
                              <Link to="" className="single-items">
                                <img
                                  src={require("../../media/about/9.jpg")}
                                  alt="album"
                                />
                              </Link>
                              <Link to="" className="single-items">
                                <img
                                  src={require("../../media/about/10.jpg")}
                                  alt="album"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="album-feature right">
                            <img
                              src={image_url + "/" + item.image}
                              className="ink-pattern"
                              alt="Album"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
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
    fetchPosts: () => dispatch(actionCreators.fetchPosts())
  };
};

const mapStateToProps = state => {
  return {
    posts: state.posts.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);

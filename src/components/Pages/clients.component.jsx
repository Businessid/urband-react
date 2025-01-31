import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import ComingSoon from "../Pages/comingsoon.component";
import BannerHero from "../Banners/bannerHero";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

library.add(faQuoteLeft, faQuoteRight);
class Clients extends Component {
  componentDidMount() {
    this.props.fetchClients();
    this.props.fetchClientsList();
  }

  render() {
    const clients = this.props.clients;
    const clientslist = this.props.clientslist;
    const data = clients.result;
    const clientdata = clientslist.result;

   

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <div>
       <BannerHero title={"Client"}/>
        <div className="fullWrap">
          {clients.length > 0 ? (
            <div>
              <section>
                <div className="page-padd">
                  <div className="container">
                    <div className="row">
                      <div className="text-center page-head">
                        What our clients say
                      </div>
                      <div className="client-Wrapper">
                        <FontAwesomeIcon
                          icon={faQuoteLeft}
                          className="quote left"
                        />
                        <FontAwesomeIcon
                          icon={faQuoteRight}
                          className="quote right"
                        />
                        <div className="col-md-12">
                          {data &&
                            data.length >
                              0(
                                <Carousel
                                  responsive={responsive}
                                  showDots={true}
                                  arrows={false}
                                  dotListClass="custom-dot-list-style"
                                >
                                  ?{" "}
                                  {data.map(item => {
                                    return (
                                      <div
                                        className="client-avathar"
                                        key={item.id}
                                      >
                                        <figure>
                                          <img
                                            src={
                                              clients.image_url +
                                              "/" +
                                              item.image
                                            }
                                            alt="thumb"
                                            className="rounded-circle fit-it"
                                          />
                                        </figure>
                                        <p>
                                          Lorem ipsum dolor sit amet
                                          consectetur, adipisicing elit.Eos
                                          expedita, doloremque sequi blanditiis
                                          perspiciatis rerum velit maiores omnis
                                          modi voluptate est veniam
                                        </p>
                                        <div className="name">
                                          <span>-</span> {item.title}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </Carousel>
                              )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="partners-area">
                <div className="container">
                  <div className="d-flex justify-content-center row">
                    <div className="col-xl-10">
                      <div className="row">
                        <div className=" col-md-5">
                          <div className="section-title style-five float-left">
                            <h2>OUR Clients</h2>
                            <p>
                              There are many variations of passages of Lorem
                              Ipsum available but the majority. We are proud
                              there are many variations of passages of Lorem
                              Ipsum available.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-7">
                          {clientdata && clientdata.length > 1 && (
                            <ul className="client-list">
                              {clientdata.map(item => {
                                return (
                                  <li key={item.id}>
                                    <img
                                      src={
                                        clientslist.image_url + "/" + item.image
                                      }
                                      alt="thumb"
                                      className="fit-it"
                                    />
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) :
           (
            <div>
              <ComingSoon />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchClients: () => dispatch(actionCreators.fetchClients()),
    fetchClientsList: () => dispatch(actionCreators.fetchClientsList())
  };
};

const mapStateToProps = state => {
  return {
    clients: state.clients.items,
    clientslist: state.clientslist.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

class WhatweDo extends Component {
  render() {
    //const image_url = "http://167.71.231.3/storage/";
    const detail = this.props.detail;
    const services = detail.whatwedo;


    return (
      <div>
        <div className="page-padd">
          <div className="container">
            <div className="section-title style-four text-center">
              <h2>Let's Do It</h2>
            </div>
            {services && services.length > 0 && (
              <div className="className">
                {services.map(item => {
                  return (
                    <div className="col-lg-4" key={item.id}>
                      <section className="services-grid">
                        <header>
                          <h1>{item.title}</h1>
                        </header>

                        <div className="content">
                          <p dangerouslySetInnerHTML={{
                                  __html: item.description
                                }}>
                           
                          </p>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchWhoWeAre: () => dispatch(actionCreators.fetchWhoWeAre())
  };
};

const mapStateToProps = state => {
  return {
    detail: state.whoweare.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhatweDo);

import React , {Component} from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarCheck, faClock, faTheaterMasks, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

library.add(faCalendarCheck, faClock, faTheaterMasks,faMapMarkerAlt);

class EventList extends Component{

    componentDidMount() {
        this.props.fetchEvent();
      }

    render(){

        const events = this.props.events;
        const data = events.result;
        return (
            <div>
            <section className="page-header artist-banner">
            <div className="tim-container">
                <div className="page-header-title text-center">
                <h2>Events</h2>
                </div>

                <div className="breadcrumbs">
                <Link to="/index">Home</Link>
                <span>/</span>
                <span>Events</span>
                </div>
            </div>
            </section>
                <section className="blog-posts">
                    <div className="container">
                    {data && data.length > 0 && (
                        <div className="row">
                        {data.map(item => {
                          return (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-full-width" key={item.id}>
                          
                                <article className="blog-post">
                                    <div className="entry-image-wrapper">
                                    <Link to="/event">
                                        <figure className="post-thumbnail"> 
                                            <img src={ events.image_url + "/" + item.image } alt="blog Thumb"/>
                                        </figure>
                                    </Link>     
                                    </div>
                                    <div className="post-type-icon"><span>6 Oct</span></div>
                                    <div className="entry-content-wrapper">
                                        <div className="event-title"><span>{item.title}</span><span className="event-status">Upcoming</span></div>
                                        <div className="entry-meta entry-meta-footer">
                                            <ul className="event-shortdetails">
                                                <li><FontAwesomeIcon icon={faCalendarCheck} className="ico" />{item.date_on}</li>
                                                <li><FontAwesomeIcon icon={faClock} className="ico" />11:00 PM to 1:00 AM</li>
                                                <li><FontAwesomeIcon icon={faMapMarkerAlt} className="ico" />{item.location}</li>
                                                <li><FontAwesomeIcon icon={faTheaterMasks} className="ico" />Beatless</li>
                                            </ul>
                                        </div>
                                        <div className="entry-content">
                                            <p>{item.description}</p>
                                        </div>
                                        <Link to="/" className="tim-btn tim-btn-bgt read-more-btn">Buy Ticket</Link>
                                    </div>
                                </article>
                            </div>
                             )
                            })}
                         
                           
                        </div>

                        )}
                    </div> 
               
            </section>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    // call action functions
    return {
        fetchEvent: () => dispatch(actionCreators.fetchEvent()),
    };
  };
  
  const mapStateToProps = state => {
    return {
        events: state.events.list // in this state list is array name as stored  API  from defined in eventListReducer
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EventList);





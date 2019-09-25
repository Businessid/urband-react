import React , { Component } from 'react'
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { withRouter } from 'react-router';
import Header from './components/header/header'
import Footer from './components/Footer/footer.component'
import HomePage from './components/Pages/home.component'
import WhoWeAre from './components/Pages/who-we-are.component'
import Event from './components/Pages/event.component'
import Artist from './components/Pages/artist.component'
import Contact from './components/Pages/contact.component'
import Clients from './components/Pages/clients.component'
import Gallery from './components/Pages/gallery.component'
import Radio from './components/Pages/radio.component'
import Gang from './components/Pages/gang.component'
import Tickets from './components/Pages/ticket.component'
import ComingSoon from './components/Pages/comingsoon.component'
import './assets/intro/css/intro.css';
import './assets/css/app.css';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}
const Scroll = withRouter(ScrollToTop);


class App extends Component{

  render(){

    return (
      <Router>
        <div className="AppContainer hero-site">
          <Header />
          <Scroll>
              <Switch>
                <Route exact path="/index" component={HomePage} />
                <Route path="/who-we-are" component={WhoWeAre} />
                <Route path="/event" component={Event} />
                <Route path="/artist" component={Artist} />
                <Route path="/contact" component={Contact} />
                <Route path="/clients" component={Clients} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/radio" component={Radio} />
                <Route path="/gang" component={Gang} />
                <Route path="/tickets" component={Tickets} />
                <Route path="/coming-soon" component={ComingSoon} />
                <HomePage/>
                <WhoWeAre/>
                <Event/>
                <Artist/>
                <Contact/>
                <Clients/>
                <Gallery/>
                <Radio/>
                <Gang/>
                <Tickets/>
                <ComingSoon/>
              </Switch>
            </Scroll>
          <Footer/>
         </div>
      </Router>
    );
  }
}


export default App;

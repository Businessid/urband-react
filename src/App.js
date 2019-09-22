import React , { Component } from 'react'
import ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/Footer/footer.component'
import HomePage from './components/Pages/home.component'
import WhoWeAre from './components/Pages/who-we-are.component'
import Event from './components/Pages/event.component'
import Artist from './components/Pages/artist.component'
import Contact from './components/Pages/contact.component'
import WhatweDo from './components/Pages/what-we-do.component'
import Clients from './components/Pages/clients.component'
import Gallery from './components/Pages/gallery.component'
import Radio from './components/Pages/radio.component'
import Gang from './components/Pages/gang.component'
import Tickets from './components/Pages/ticket.component'
import ComingSoon from './components/Pages/comingsoon.component'
import './assets/intro/css/intro.css';
import './assets/css/app.css';
class App extends Component{  //React.Component we can use on import on top

  

  render(){

    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory}>
        <div className="AppContainer hero-site">
          <Header />
              <Switch>
              <Route exact path="/index" component={HomePage} />
              <Route path="/who-we-are" component={WhoWeAre} />
              <Route path="/event" component={Event} />
              <Route path="/artist" component={Artist} />
              <Route path="/contact" component={Contact} />
              <Route path="/what-we-do" component={WhatweDo} />
              <Route path="/clients" component={Clients} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/radio" component={Radio} />
              <Route path="/gang" component={Gang} />
              <Route path="/tickets" component={Tickets} />
              <Route path="/coming-soon" component={ComingSoon} />
              <HomePage/>
              <WhoWeAre/>
              <WhatweDo/>
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
          <Footer/>
         </div>
      </Router>
    );
  }
}


export default App;

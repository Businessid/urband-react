import React , {Component} from 'react';
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StoreHeader from '../../StoreHeader/header.component'
import ProductListHero from '../../ListingGrid/product-list-hero.component'

library.add(faPlay)

class AlbumHome extends React.Component{
    state={
        artist:[
            {id:1,name:'John Lenon',released:"22-12-2018"},
            {id:2,name:'Fun',released:"22-12-2018"},
            {id:3,name:'Fun',released:"22-12-2018"},
            {id:4,name:'Fun',released:"22-12-2018"}
        ]
    }

    render(){
        

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
                    <StoreHeader/>
                    {this.state.artist.map((item) => 
                    <div className="col-md-3 col-sm-6 col-12 artist-thump"  key={item.id}>
                        <ProductListHero 
                        >
                            <div>By <b>{item.name}</b></div>
                            <div>Released on <b>{item.released}</b></div>
                            <Link to={"/albums/detail/heaven"} className="play-btn-round"><FontAwesomeIcon icon={faPlay} /></Link>
                        </ProductListHero>
                    </div>
                    )}
 
                    
                    
                </div>
            </div>        
        </section>     
		</div>
           
           
        );
    }
}

export default AlbumHome;





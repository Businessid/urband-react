import React , {Component} from 'react';
import { Link } from 'react-router-dom'
class AlbumHome extends React.Component{


    render(){
        

        return (
           
         <div>
            <section className="page-header artist-banner">
                <div className="tim-container">
                    <div className="page-header-title text-center">
                    <h2>Album List</h2>
                    </div>

                    <div className="breadcrumbs">
                    <Link to="/album-detail">Home</Link>
                        <span>/</span>
                        <span>Album</span>
                       
                    </div>

                  

                </div>
        </section>	
        <Link to="/detail">Detail</Link>
             
		</div>
           
           
        );
    }
}

export default AlbumHome;





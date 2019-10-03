import React , {Component} from 'react';
import { Link } from 'react-router-dom'
class AlbumDetail extends React.Component{


    render(){
        

        return (
           
         <div>
            <section className="page-header artist-banner">
                <div className="tim-container">
                    <div className="page-header-title text-center">
                    <h2>Heaven</h2>
                    </div>

                    <div className="breadcrumbs">
                    <Link to="/album-detail">Home</Link>
                        <span>/</span>
                        <span>Album</span>
                        <span>Heaven</span>
                    </div>

                </div>
        </section>	

             
		</div>
           
           
        );
    }
}

export default AlbumDetail;





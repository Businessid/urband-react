import React , {Component} from 'react';
import { Link } from 'react-router-dom'
import DetailHero from '../../Pages/Music/detail.component'
import PlayerHero from '../../Pages/Music/player.component'
class AlbumDetail extends Component{


    render(){ 
        

        return (
           
         <div>
            <section className="page-header artist-banner">
                <div className="tim-container">
                    <div className="page-header-title text-center">
                    <h2>Brack Up</h2>
                    <h3>Jonlan</h3>
                    </div>

                    <div className="breadcrumbs">
                    <Link to="/album-detail">Home</Link>
                        <span>/</span>
                        <span><Link to="/albums">Album</Link></span>
                        <span>/</span>
                        <span>Brack Up</span>
                    </div>

                </div>
        </section>	

        <DetailHero/>
        <div className="album-player">
            <PlayerHero

            >
              
            </PlayerHero>
            
        </div>


             
		</div>
           
           
        );
    }
}

export default AlbumDetail;





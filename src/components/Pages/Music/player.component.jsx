import React , {Component} from 'react';
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AudioPlayer from 'react-playlist-player'

library.add(faPlay)

class PlayerHero extends Component{

    // constructor(props){
    //     super(props)
    // }

    state = {
        currentPlayList: {}
       
      }

      componentDidMount(){
        this.setState({
            currentPlayList: {
                playlistCoverUrl: 'https://e-cdns-images.dzcdn.net/images/playlist/ab4e61f7c223dbd66e06465bc0452b01/264x264-000000-80-0-0.jpg',
                playlistName: 'Aseel Hameem',
                bandName: 'Aseel Hameem',
                songs: [
                {
                    position: '1',
                    songName: 'foo',
                    songUrl: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3'
                },
                {
                    position: '2',
                    songName: 'bar',
                    songUrl: 'path/to/songUrl'
                },
                {
                    position: '3',
                    songName: 'baz',
                    songUrl: 'path/to/songUrl'
                }
                ],
                type: 'album'
            },
            
            
            })
      }
 
    render(){ 

        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 5,
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            };  
    
       
        return (
           
         <div>
            <section className="related-album-single single-album-player">
                        <div className="container">
                            <div className="row">
                                <div className='style-fullwidth'>
                                    {/* <div className="player-top-btn">
                                        <button className='tim-btn play-btn-large' onClick={this.loadPlayList}> Load playlist</button>
                                        <button class="tim-btn">Share</button>
                                    </div> */}

                                    <AudioPlayer currentPlayList={this.state.currentPlayList} />

                                   
                                    <div className="jp-playlist style-fullwidth">
                                        <div className="section-title m-0">
                                            <h2>Track <span>List</span></h2>
                                        </div>
                                    <ul>
                                        <li className="jp-playlist-current style-fullwidth">
                                            <div className="jp-album-me"><div className="cell-play-icons"><FontAwesomeIcon icon={faPlay} /></div><Link  className="jp-playlist-item jp-playlist-current">Happy Life 02 sdfsf<span className="jp-artist">by Derwood Spinks</span></Link></div>
                                        </li>
                                        <li className="jp-playlist-current style-fullwidth">
                                            <div className="jp-album-me"><div className="cell-play-icons"><FontAwesomeIcon icon={faPlay} /></div><Link  className="jp-playlist-item jp-playlist-current">King Magicians <span className="jp-artist">by Derwood Spinks</span></Link></div>
                                        </li>
                                        <li className="jp-playlist-current style-fullwidth">
                                            <div className="jp-album-me"><div className="cell-play-icons"><FontAwesomeIcon icon={faPlay} /></div><Link  className="jp-playlist-item jp-playlist-current">Leaving it Behind <span className="jp-artist">by Derwood Spinks</span></Link></div>
                                        </li>
                                        <li className="jp-playlist-current style-fullwidth">
                                            <div className="jp-album-me"><div className="cell-play-icons"><FontAwesomeIcon icon={faPlay} /></div><Link  className="jp-playlist-item jp-playlist-current">Happy Life 02 sdfsf<span className="jp-artist">by Derwood Spinks</span></Link></div>
                                        </li>

                                        
                                    </ul>
                                </div>
                                </div>
   
                            </div>
                        </div>
                    </section>  

                    <section className="related-album-single bottom">
                        <div className="container">
                            <div className="row">
                            <div className='style-fullwidth'>
                            <div className="section-title m-0">
                                <h2>RELATED <span>ALBUM</span></h2>
                            </div>
                            <Carousel responsive={responsive}>
                                <li className=" clearfix swiper-slide ">
                                    <div className="single-related-album">
                                    
                                    <img src={require('../../../media/album/ra1.jpg')} alt=""/>
                            
                                        <div className="single-related-prod-bottom">
                                            <div className="left">
                                                <Link>Funny Litle World</Link>
                                                <p>6 Tracks</p>
                                            </div>
                                            <Link  className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                                        </div>
                                    </div>
                                </li>
                                <li className=" clearfix swiper-slide ">
                                    <div className="single-related-album">
                                    
                                    <img src={require('../../../media/album/ra1.jpg')} alt=""/>
                                
                                        <div className="single-related-prod-bottom">
                                            <div className="left">
                                                <Link>Funny Litle World</Link>
                                                <p>6 Tracks</p>
                                            </div>
                                            <Link  className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                                        </div>
                                    </div>
                                </li>
                                <li className=" clearfix swiper-slide ">
                                    <div className="single-related-album">
                                        
                                    <img src={require('../../../media/album/ra2.jpg')} alt=""/>
                                
                                        <div className="single-related-prod-bottom">
                                            <div className="left">
                                                <Link>Funny Litle World</Link>
                                                <p>6 Tracks</p>
                                            </div>
                                            <Link  className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                                        </div>
                                    </div>
                                </li>
                                <li className=" clearfix swiper-slide ">
                                    <div className="single-related-album">
                                        
                                    <img src={require('../../../media/album/ra3.jpg')} alt=""/>
                                
                                        <div className="single-related-prod-bottom">
                                            <div className="left">
                                                <Link>Funny Litle World</Link>
                                                <p>6 Tracks</p>
                                            </div>
                                            <Link className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                                        </div>
                                    </div>
                                </li>
                                <li className=" clearfix swiper-slide ">
                                    <div className="single-related-album">
                                    
                                    <img src={require('../../../media/album/ra4.jpg')} alt=""/>
                            
                                        <div className="single-related-prod-bottom">
                                            <div className="left">
                                                <Link>Funny Litle World</Link>
                                                <p>6 Tracks</p>
                                            </div>
                                            <Link  className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                                        </div>
                                    </div>
                                </li>
                                <li className=" clearfix swiper-slide ">
                                    <div className="single-related-album">
                                    
                                    <img src={require('../../../media/album/ra4.jpg')} alt=""/>
                            
                                        <div className="single-related-prod-bottom">
                                            <div className="left">
                                                <Link>Funny Litle World</Link>
                                                <p>6 Tracks</p>
                                            </div>
                                            <Link  className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                                        </div>
                                    </div>
                                </li>
                            </Carousel>
                        </div>    
                        </div>
                    </div>
        </section>    
        
		</div>
           
           
        );
    }
}

export default PlayerHero;





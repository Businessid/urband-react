import React , {Component} from 'react';
import SliderHero from '../Pages/slider/slider.component'
import H5AudioPlayer from '../AudioPlayer/audioplayer.component'
import MultiCarousel from '../Urband-MultiCarousel/artist-lineup.component'
import MultiCarouselHero from '../Urband-MultiCarousel/multi-carousel'
import PlayAnimation from './LatestRelease/play-animation.component'
import AlbumListHome from '../Pages/Album/LatestAlbums/album-list.component'
import PreviousShowHome from '../Pages/PreviousShows/previous-show.component'
import UpcomingShowHome from '../Pages/UpcomingShows/upcoming-shows.component'
import SpotLight from '../Pages/SpotLight/spot-light.component'

class HomePage extends Component{


    render(){

        return (

          <div>
            <SliderHero/>
            <H5AudioPlayer
            src="https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3"
            onPlay={e => console.log("onPlay")}
            // other props here
            />
            <MultiCarousel/>
            <MultiCarouselHero/>
            <PlayAnimation/>
            <AlbumListHome/>
            <PreviousShowHome/>
            <UpcomingShowHome/>
            <SpotLight/>
            
           
         </div>
           
        );
    }
}

export default HomePage;





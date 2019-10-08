import React  from 'react';
import { Link } from 'react-router-dom'

class Artist extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			items:[],
			isLoaded:false
		}
	}
	componentDidMount(){

		const axios = require('axios');
			axios.post('http://167.71.231.3/api/artists')
				.then(res => this.setState({isLoaded:true,items:res.data[0]}))
				.catch(err => console.log(err));
		}
    render(){

		var  {isLoaded, items} = this.state;

        return (

            <div>
                 <section className="page-header artist-banner">
                    <div className="tim-container">
                        <div className="page-header-title text-center">
                            <h2>Artists</h2>
                        </div>

                        <div className="breadcrumbs">
                        <Link to="/index">Home</Link>
                            <span>/</span>
                            <span>Artists</span>
                        </div>
                    </div>
		
                </section>

                <section id="about-two" className="section-padding">
			<div className="tim-container">
				<div className="row no-gutters artist-row">
					<div className="col-lg-6">
						<div className="artist-about pr__30">
							<h3 className="artist-name">{items.name}</h3>
							<h6>{items.genre}</h6>
							<span>Album: Rockstar, first rain, Love Song (More)</span>
							<div className="content">
								<p>
								{items.about}
								</p>
								
								<p>
									The majority suffered aboaNalteration in some form by injected humour or randomised words which don't look even slightly nothi belieable. If you are going to use a passage of Lorem Ipsum, you need believable.
								</p>
							</div>
					

							<h4 className="alb-title">Album & Single</h4>

							<div className="alb-single">
								<Link to="" className="single-items"><img src={require('../../media/about/6.jpg')} alt="album"/></Link>
                                <Link to="" className="single-items"><img src={require('../../media/about/7.jpg')} alt="album"/></Link>
                                <Link to="" className="single-items"><img src={require('../../media/about/8.jpg')} alt="album"/></Link>
                                <Link to="" className="single-items"><img src={require('../../media/about/9.jpg')} alt="album"/></Link>
                                <Link to="" className="single-items"><img src={require('../../media/about/10.jpg')} alt="album"/></Link>

								
							</div>
					
						</div>
				
					</div>
			

					<div class="col-lg-6">
						<div class="album-feature right">
							<img src={items.image} className="ink-pattern" alt="Album"/>
						</div>
		
					</div>
			
				</div>
            
            	<div className="row no-gutters artist-row">
					<div className="col-lg-6">
						<div className="album-feature left">
                        <img src={require('../../media/about/12.jpg')} alt="Album"/>
						</div>
				
					</div>
			
					<div class="col-lg-6">
						<div class="artist-about pl__30 pt_70">
							<h3 class="artist-name">Sezar Doue</h3>
							<h6>Genre : Guitarist/Singer</h6>
							<span>Album: Rockstar, first rain, Love Song (More)</span>
							<div class="content">
								<p>
									There are many variations of passages of Lorem Ipsum available but the majority suffered aboaNalteration in some form by injected humour or randomised words which don't look even slightly nothi belieable. If you are going to use a passage of Lorem Ipsum,
									you need believable.
								</p>

								<p>
									Available but the majority suffered about the are Nalteration in some form by injected humoranomised words which don't look even slightly nothi believable.
								</p>
								<p>
									The majority suffered aboaNalteration in some form by injected humour or randomised words which don't look even slightly nothi belieable. If you are going to use a passage of Lorem Ipsum, you need believable.
								</p>
							</div>
						

							<h4 class="alb-title">Album & Single</h4>

							<div class="alb-single">
                                <Link to="" className="single-items"><img src={require('../../media/about/6.jpg')} alt="album"/></Link>
                                <Link to="" className="single-items"><img src={require('../../media/about/7.jpg')} alt="album"/></Link>
                                <Link to="" className="single-items"><img src={require('../../media/about/8.jpg')} alt="album"/></Link>
                                <Link to="" className="single-items"><img src={require('../../media/about/9.jpg')} alt="album"/></Link>
                                <Link to="" className="single-items"><img src={require('../../media/about/10.jpg')} alt="album"/></Link>
								
							</div>
					
						</div>
					
					</div>
			
				</div>
			

				
           
     </div>  
    </section>
    </div>





        );
    }
}

export default Artist;




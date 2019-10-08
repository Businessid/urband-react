import React , {Component} from 'react';
import { Link } from 'react-router-dom'
class DetailHero extends React.Component{


    render(){ 
        

        return (
           
         <div>
            
            <section className="section-padding album-info-wrapper">
			<div className="container">
				<div className="row single-album-info">

					<div className="col-md-6 padding-remove">
						<div className="single-album-image">
							<img src={require('../../../media/album/17.jpg')} alt=""/>
						</div>
					</div>
					

					<div className="col-md-6 padding-remove album-detail">
						<div className="single-album-details">
							<div className="details-top">
								<h6>Life itself! The way</h6>
								<p>Established fact that a reader will be distracted by readable content of a page when looking at its lay poin usin Ipsum is tmore-or-less.</p>
							</div>

							<ul>
								<li>Albume <span>Single</span></li>
								<li>Artist<span>Bernard Adamus</span></li>
								<li>Release Day <span>March, 10th, 2018</span></li>
								<li>Genre <span>R&B,Jazz</span></li>
								<li>Produce By <span>ThemeIM Entertainment</span></li>
								<li>Number Of Track <span>16 Tracks</span></li>
							</ul>

							<div className="single-album-description">
								<h6>Album Description</h6>
								<p>Established fact that a reader will be distracted by readable content of a page when looking at its lay poin usin Ipsum is tmore-or-less specimen book. It has survived not only five centuries, but the leap electronic typesetting,</p>
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

export default DetailHero;





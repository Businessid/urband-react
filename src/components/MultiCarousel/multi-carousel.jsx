
import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import artist1 from '../../media/artist/1.jpg';
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";


class multiCarouselHero extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const posts = this.props.posts;
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
			<section className="section-padding-two artist-lineup">
				<div className="tim-container clearfix">
					<ul>

						{posts.length > 0
							? posts.map(item => {
								return (
									<Carousel responsive={responsive}>
										<li className="artist-single clearfix swiper-slide">
											<img
												src={item.image_url + "/" + item.image}
												className="ink-pattern"
												alt="Album"
											/>
											<div className="artist-single-content">

												<h6>James Hetfield</h6>
												<p>Band: Metallica</p>
											</div>
										</li>
									</Carousel>
								);
							})
							: ""}


					</ul>
				</div>
			</section>

		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchPosts: () => dispatch(actionCreators.fetchPosts())
	};
};

const mapStateToProps = state => {
	return {
		posts: state.posts.items
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(multiCarouselHero);


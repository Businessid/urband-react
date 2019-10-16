import React , {Component} from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

class Gang extends Component{


    render(){

        return (
            <div>
            <section className="the-gang">
                <div className="container">
                <div className="section-title style-four">
                    <h2>Meet Our Gang</h2>
                    <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour.</p>
                </div>
                <StyleRoot>
                    <Coverflow
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={true}
                    clickable={true}
                    active={0}
                    media={{
                        '@media (max-width: 900px)': {
                        width: '600px',
                        height: '300px'
                        },
                        '@media (min-width: 900px)': {
                        width: '960px',
                        height: '600px'
                        }
                    }}
                    >   
                    <img src={require('../../media/artist/a4.jpg')} alt="Arthur Melo"/>
                    <img src={require('../../media/artist/a1.jpg')} alt="Chester"/>
                    <img src={require('../../media/artist/a2.jpg')} alt="Zappa Costa"/>
                    <img src={require('../../media/artist/a3.jpg')} alt="John Lenon"/>
                    </Coverflow>
                </StyleRoot>
                </div>
            </section>        
        </div>
           
           
        );
    }
}

export default Gang;





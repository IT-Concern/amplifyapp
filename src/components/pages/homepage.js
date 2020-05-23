import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShowMoreText from 'react-show-more-text';

const photos = [
    {
        name: 'photo 1',
        src: "Images/Production_Optimiz.png", 
        altText:"Photo1"
    },
    {
        name: 'photo 2',
        src: "Images/stpf.png", 
        altText:"Photo2"
    },
    {
        name: 'photo 3',
        src: "Images/well_rep.png", 
        altText:"Photo3"
    },
    {
        name: 'photo 4',
        src: "Images/pta.png", 
        altText:"Photo4"
    }
]

class Homepage extends Component {
    state = {  }
    render() { 
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1800,
            centerMode: true,
            cssEase: "linear",
            className: 'slides'
        }
        return ( 
            <div className="container-fluid">
                <br />
                
                <Slider {...settings}>
                    {photos.map((photo)=> {
                        return (
                            <div>
                                <img width="80%" style={{paddingLeft:200}} src={photo.src} alt="images"/>
                            </div>
                        )
                    }
                    )}
                </Slider>

                <br />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 style={{fontSize:30}}>OUR MISSION</h3>
                            <p> 
                                To create a state-of-the-art Technology Company that will leverage on
                                more than 3 decades of experience and novel technology to bring
                                improvement to organization's processes. 
                            </p>   
                        </div> 
                
                        <div className="col">
                            <h3 style={{fontSize:30}}>OUR COMPANY</h3>
                            <ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Show more'
                                    less='Show less'
                                    anchorClass=''
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={550}
                                >
                                     <p>
                                        <b style={{fontSize:30}}><i>eTe</i>Optimiza</b> is a technology company that started in 2020.
                                        We specialize in software applications for oil, gas and renewable 
                                        industries. Our software applications are customized for your needs. 
                                    </p>
                                    <p>    
                                        Our products include production optimization, production improvement
                                        collaboration, pressure transient analysis automation, short term production forecasts and 
                                        well engineering reporting tools.
                                    </p>
                                    <p>
                                        eTeOptimiza builds custom tools that automates the process that petroleum and production
                                        engineers and managers use to deliver increased production and deliver wells' potential.
                                    </p>
                                    <p>
                                        You can navigate to the products section to learn more about our products.
                                    </p>    
                            </ShowMoreText>                 
                        </div>
                    </div>
                    
                </div>

            </div>
         );
    }
}
 
export default Homepage ;
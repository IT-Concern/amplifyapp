import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
    {
        name: 'photo 1',
        url: 'https://img.offshore-mag.com/files/base/ebm/os/image/2019/03/content_dam_os_en_articles_2018_09_lundin_achieves_goals_from_barents_sea_well_test_leftcolumn_article_headerimage_the_semisubmersible_leiv_eiriksson_drilled_well_7720_11_5_on_license_pl609_in_the_barents_sea.png?auto=format&w=720'
    },
    {
        name: 'photo 2',
        url: 'https://info.industrialskyworks.com/hs-fs/hubfs/Stock%20images/close%20up%20of%20industrial%20pipes%20of%20oil%20industry%20production.jpeg?width=600&name=close%20up%20of%20industrial%20pipes%20of%20oil%20industry%20production.jpeg'
    },
    {
        name: 'photo 3',
        url: 'https://www.openinventor.com/backoffice/wp-content/uploads/Solutions-Well-Image-Well-planning.png'
    },
    {
        name: 'photo 4',
        url: 'https://frontender.com/blog/wp-content/uploads/2014/09/Petroleum-Engineering-Course-image.png'
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
                                <img width="80%" style={{paddingLeft:200}} src={photo.url} alt="images"/>
                            </div>
                        )
                    }
                    )}
                </Slider>

                <br />

                <p>
                    <b style={{fontSize:30}}><i>eTe</i>Optimiza</b> is a technology company that started in 2020.
                    We specialize in software applications for oil, gas and renewable 
                    industries. Our software is customized for your needs. 
                    
                    Our products include production optimization, production improvement
                    collaboration, pressure transient analysis automation, short term production forecasts and 
                    well engineering reporting tools.
                    
                    eTeOptimiza builds custom tools that automates the process that petroleum and production
                    engineers and managers use to deliver increased production and deliver wells' potential.

                    You can navigate to the products section to learn more about our products.
                </p>

            </div>
         );
    }
}
 
export default Homepage ;
import React, { Component } from 'react';
import ShowMoreText from 'react-show-more-text';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = { showText: false };
          }
   render() { 
        return ( 
            <div className="container-fluid">
                <h1 style={{marginLeft:500, padding:20}}>
                    PRODUCTS
                </h1>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div>
                                <h3>OPTIMIZATION AND COLLABORATION TOOL®</h3>
                                <img width="100%" style={{paddingLeft:10}} src="http://mopartners.global/wp-content/uploads/2018/04/petrostreamz-integration-optimization.png" alt="images"/>
                            </div>
                            <br />
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
                                <b>OPTIMIZATION AND COLLABORATION TOOL®</b> is a powerful, 
                                ground-breaking production optimization software tool,
                                which is currently under development.
                                This tool will soon be available commercially: 
                                    The components of this Software include:
                                    <ul>
                                        <li>
                                            KPI Dashboard
                                        </li>
                                        <li>
                                            Virtual Collaboration room
                                        </li>
                                        <li>
                                            Well Performance Dashboard
                                        </li>
                                        <li>
                                            Production Gap Analyzer
                                        </li>
                                    </ul>
                                    If you want to:
                                    <ul>
                                        <li>
                                            Screen and analyze wells in search of hidden inefficiencies!
                                        </li>
                                        <li>
                                            Evaluate the impact of correcting problems! 
                                        </li>
                                        <li>
                                            Search for unlocked potentials! 
                                        </li>
                                        <li>
                                            Improve Technical efficiency 
                                        </li>
                                        <li>
                                            Increase profitability!
                                        </li>
                                    </ul> 
                                    Then this Software is for you 
                            </ShowMoreText>
                        </div>
                        <div className="col">
                            <div>
                            <h3>STPF TOOL®</h3> 
                                <br />
                                <img width="100%" style={{padding:10}} src="http://www.marketoracle.co.uk/images/2020/Mar/crude-oil-13-1.png" alt="images"/>
                            </div>
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                anchorClass=''
                                onClick={this.executeOnClick}
                                expanded={false}
                                width={500}
                            >
                                    <b>STPF TOOL®</b> is a powerful tool that will enable your team 
                                    to Cut forecasting cycle times by more than 50%, improve accuracy, 
                                    and accelerate productivity. The features of this Software include:
                                    <ul>
                                        <li>
                                            Ability to connect with the local production data base
                                        </li>
                                        <li>
                                            Perform Decline Curve Analysis (option for user custom profile)
                                        </li>
                                        <li>
                                            Application of availability, reliability and adjustment for flash production
                                            on user-specified production mechanism
                                        </li>
                                        <li>
                                            Account for NGL
                                        </li>
                                        <li>
                                            Adjustment of forecast once new data are available
                                        </li>
                                    </ul>
                                </ShowMoreText>
                            </div>
                        </div>
                        <div className="row">
                           <div className="col">
                           <br />
                            <div>
                                <h3>WDR®</h3>
                                <img width="100%" style={{paddingLeft:10}} src="https://tse1.mm.bing.net/th?id=OIP.chSNCgJG-C5d1g-TQf9-uAHaEJ&pid=Api&P=0&w=269&h=152" alt="images"/>
                            </div>
                            <br />
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                anchorClass=''
                                onClick={this.executeOnClick}
                                expanded={false}
                                width={540}
                            >
                                <b>WDR®</b> is a Well Drilling Report software which digitized this vital part of drilling operations.            
                                In this reports we can find the purpose of a well, information on well and drilling log information.
                                In the past, Driling engineers relied on paper forms or Excel® spreadsheets to record well information 
                                product usage, and inventory on a daily basis. 
                                This approach meant that engineers encountered a variety of issues, such as disorganization of numerous 
                                daily reports and difficulty with generating end-of-well recaps.
                            
                                WDR Software is designed for both drilling engineers at rig sites and engineering managers. 
                                A drilling engineer will use the software to record drilling data and generate daily reports whereas a 
                                manager can use WDR to review and manage data, make an end-of-well recap and compare multiple wells.
                            </ShowMoreText>
                        </div>
                        <div className="col">
                        <br />
                            <div>
                                <h3>PTA Automation TOOL®</h3>
                                <img width="100%" style={{paddingLeft:10}} src="https://cdn.ihs.com/www/blog/figure4.png" alt="images"/>
                            </div>
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                anchorClass=''
                                onClick={this.executeOnClick}
                                expanded={false}
                                width={540}
                            >
                                <b>PTA Automation TOOL®</b> is a powerful for real time pressure transient analysis. The analysis of pressure changes over time, especially those associated with small variations 
                                    in the volume of fluid. In most well tests, a limited amount of fluid is allowed to flow from the 
                                    formation being tested and the pressure at the formation monitored over time. Then, the well is 
                                    closed and the pressure monitored while the fluid within the formation equilibrates. The analysis of
                                    these pressure changes can provide information on the size and shape of the formation as well as its 
                                    ability to produce fluids.

                                    Many wells that are drilled in this decade have permanently down hole gauges installed. The 
                                    information provided by a permanently mounted sensor enables smart well technology. A "smart well" 
                                    is a well that can monitor information and make adjustments automatically. The adjustments will 
                                    optimize production or protect the well. 
                                    
                                    PDG's are important tools for optimal production and protection of our most important 
                                    non-renewable resources.
                                    
                                    Our PTA Automation tool has the following features:
                                    <ul>
                                        <li>
                                            Scheduled check for new PBU.
                                        </li>
                                        <li>
                                            Ability to send additional data, pressures & production to PTA tool
                                        </li>
                                        <li>
                                            Automation of data formatting
                                        </li>
                                        <li>
                                            Extract derivatives
                                        </li>
                                        <li>
                                            Ability to use first-pass interpretation from the user to train new PBU
                                        </li>
                                        <li>
                                            Ability to send email to user with (summary of PBU extracted) to review and adjust 
                                            the interpretation as necessary. 
                                        </li>
                                        <li>
                                            Ability to transfer results to a database.  
                                        </li>
                                    </ul> 
                            </ShowMoreText>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Products ;
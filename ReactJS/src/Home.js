import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Home() {  

    return (
              <>
  

                        <img class="card-img-top" src="https://www.twpl.com/wp-content/uploads/Fotolia_115171174_M-1080x675.jpg" alt="Card image cap"
                          style={{opacity:50, width:1560,height:500}}  ></img>


                          <br/><br/>
              
              <div class="card-deck offset-4" style={{display:'flex', width:1500, paddingLeft:100, height:500}}>
              <div class="card" style={{width: 700, backgroundColor:'lightgrey'}}>
                  <img
                    src="https://www.wendia.com/wp-content/uploads/2015/11/configuration_people.png"
                    class="card-img-top"
                    alt="..."  style={{height:250}}
                  />
                  <div class="card-body">
                    <p class="card-text" style={{fontFamily:"Times New Roman"}}>
                      Integrating all the attributes gives successfull Asset Management. Asset integrity, 
                      or asset integrity management systems (AIMS) is the term for an asset’s capacity to 
                      run effectively and accurately, whilst also protecting the wellbeing of all personnel 
                      and equipment with which it interacts – as well as the measures in place to assure the 
                      asset’s life cycle. Asset integrity applies to the entirety.
                    </p>
                  </div>
                </div>

                <div class="card" style={{width: 700, backgroundColor:'lightgrey'}}>
                  <img
                    src="https://assets.pcmag.com/media/images/479840-the-best-asset-management-software-of-2015.jpg?thumb=y&width=810&height=456"
                    class="card-img-top"
                    alt="..." style={{height:250}}
                  />
                  <div class="card-body">
                    <p class="card-text" style={{fontFamily:"Times New Roman"}}>
                      Systematic Asset Management includes organising, planning and doing. 
                      Systematic asset management must be considered as one of the first 
                      revolutions in financial technology. However, it quickly became the 
                      industrial secret of many successful funds. Asset management is a 
                      systematic process of developing, operating, maintaining, upgrading, 
                      and disposing of assets in the most cost-effective manner 
                      (including all costs, risks and performance attributes).
                    </p>
                  </div>
                </div>

                <div class="card" style={{width: 700, backgroundColor:'lightgrey'}}>
                  <img
                    src="https://www.wallrich.co.za/images/news/Article-1-Risk-Management.jpg"
                    class="card-img-top"
                    alt="..." style={{height:250}}
                  />
                  <div class="card-body">
                    <p class="card-text" style={{fontFamily:"Times New Roman"}}>
                      Prioritizing the assets based on risks is always required to maintain assets Successfully.
                      there are at least five such risks that primarily contribute to an organization’s failure 
                      to optimally manage their assets: 1) not knowing what they have; 
                      2) over- or under-maintenance; 3) improper operation; 
                      4) improper risk management; and 5) suboptimized asset management systems.
                    </p>
                  </div>
                </div>
                </div>



                <br/><br/>

                
          <img class="card-img-top" src="http://connections.rdm.com/wp-content/uploads/2018/12/050.6713-1002x1024.jpg" alt="Card image cap"
                          style={{opacity:50, width:1560,height:900}}  ></img>

              <br/><br/> <br/><br/>

              <div class="card text-center" style={{width:1600}}>
                <div class="card-header" style={{color:"black",backgroundColor:'lightblue', fontFamily:"Times New Roman", fontSize:23}}>
                <strong> Back To Top</strong>
                </div>
              </div>

              </>

    )
}

export default Home




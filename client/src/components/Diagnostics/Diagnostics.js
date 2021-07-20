import React from 'react'
// import "C:/Users/ankit/Downloads/VirtualMedic/client/node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Diagnostics.css'

const Diagnostics = () => {
    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
              <div class="col-sm">
              <div class="cardib" >
                  <img src="./images/X-Ray.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                      <h4 class="card-title"><b>X-Ray</b></h4>
                      <p class="card-text"><i>An X-ray, or X-radiation, is a penetrating form of high-energy electromagnetic radiation. Most X-rays have a wavelength ranging from 10 picometers to 10 nanometers.</i></p>
                      <a href="https://en.wikipedia.org/wiki/X-ray" class="btn btn-primary">Know More</a>
                  </div>
              </div>
            </div>
            <div className="col-sm">
                <div className="cardib" >
                <img src="./images/ECG.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title"><b>ECG</b></h4>
                        <p className="card-text"><i>Electrocardiography is the process of producing an electrocardiogram. It is a graph of voltage versus time of the electrical activity of the heart using electrodes placed on the skin.</i> </p>
                        <a href="https://en.wikipedia.org/wiki/Electrocardiography" className="btn btn-primary">Know More</a>
                    </div>
                </div>
            </div>
            <div className="col-sm">
              <div className="cardib" >
              <img src="./images/CT-Scan.png" className="card-img-top" alt="..."/>
                  <div className="card-body">
                      <h4 className="card-title"><b>CT-Scan</b></h4>
                      <p className="card-text"><i>A CT scan or computed tomography scan is a medical imaging technique used in radiology to get detailed images of the body noninvasively for diagnostic purposes.</i></p>
                      <a href="https://en.wikipedia.org/wiki/CT_scan" className="btn btn-primary">Know More</a>
                  </div>
              </div>
            </div>
    
         </div>
        </div>
        </React.Fragment>
    )
}

export default Diagnostics;
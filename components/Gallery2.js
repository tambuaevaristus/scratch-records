import React from 'react'

function Gallery2() {
  return (
    <div className="bg-dark h-100  gallery2-div align-content-center text-center px-4 ">
        <div className="container py-5 ">
          <div className="container-gallery d-flex ">
          {/* <div className="popup popup-1">
             <img
              className="img-fluid"
              alt="Pop Up Gallety"
              src="/assets/scratchrecord_5.jpg"
            /> *
          </div> */}
          <div className="popup popup-2">
            <img
              className="img-fluid"
              alt="Pop Up Gallety"
              src="/assets/scratchrecord_4.jpg"
            />
          </div>
          <div className="popup popup-3">
            <img
              className="img-fluid"
              alt="Pop Up Gallety"
              src="/assets/scratchrecord_3.jpg"
            />
          </div>
          <div className="popup popup-4">
            <img
              className="img-fluid"
              alt="Pop Up Gallety"
              src="/assets/scratchrecord_2.jpg"
            />
          </div>
          <div className="popup popup-5">
            <img
              className="img-fluid"
              alt="Pop Up Gallety"
              src="/assets/scratchrecord_1.jpg"
            />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Gallery2
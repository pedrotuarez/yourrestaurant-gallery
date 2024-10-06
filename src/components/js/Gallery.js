import React from 'react';
import '../css/Gallery.css';
import '../css/FontAwesomeAll.css';
import { ShowModal, CloseModal } from './modal.js';
import imagesGallery from './imagesGallery';

function Gallery() {
  
  return (
    <>
      <div className="pg-modal" id="pg-modal">
        <div className="pg-modal-content">
          <img src="" alt="" className="pg-modal-img" id="pg-modal-img"/>
        </div>
        <div className="pg-modal-boton" id="pg-modal-boton" onClick={CloseModal}>X</div>
      </div>

      <section className="pg-banner">
        <img src={imagesGallery[0].urlg} alt={imagesGallery[0].altg}
          className="pg-banner-img"
        />
        <div className="pg-banner-content">The best of our gallery</div>
      </section>

      <main className="pg-main">
        <div className="pg-group-gallery">
          <h2 className="pg-group-title">Our Gallery</h2>
          <div className="pg-container pg-container-flex">
            <div className="pg-column pg-column-50-25">
              <img src={imagesGallery[1].urlg} alt={imagesGallery[1].altg} 
               className="pg-gallery-img pg-gallery-img-big"
               onClick={() => ShowModal(`${imagesGallery[1].urlg}`)}
              />
              <img src={imagesGallery[2].urlg} alt={imagesGallery[2].altg} 
               className="pg-gallery-img pg-gallery-img-small"
               onClick={() => ShowModal(`${imagesGallery[2].urlg}`)}
              />
            </div>
            <div className="pg-column pg-column-50-25">
              <img src={imagesGallery[3].urlg} alt={imagesGallery[3].altg} 
               className="pg-gallery-img pg-gallery-img-small"
               onClick={() => ShowModal(`${imagesGallery[3].urlg}`)}
              />
              <img src={imagesGallery[4].urlg} alt={imagesGallery[4].altg} 
               className="pg-gallery-img pg-gallery-img-big"
               onClick={() => ShowModal(`${imagesGallery[4].urlg}`)}
              />
            </div>
            <div className="pg-column pg-column-50-25">
              <img src={imagesGallery[5].urlg} alt={imagesGallery[5].altg} 
               className="pg-gallery-img pg-gallery-img-big"
               onClick={() => ShowModal(`${imagesGallery[5].urlg}`)}
              />
              <img src={imagesGallery[6].urlg} alt={imagesGallery[6].altg} 
               className="pg-gallery-img pg-gallery-img-small"
               onClick={() => ShowModal(`${imagesGallery[6].urlg}`)}
              />
            </div>
            <div className="pg-column pg-column-50-25">
              <img src={imagesGallery[7].urlg} alt={imagesGallery[7].altg} 
               className="pg-gallery-img pg-gallery-img-small"
               onClick={() => ShowModal(`${imagesGallery[7].urlg}`)}
              />
              <img src={imagesGallery[8].urlg} alt={imagesGallery[8].altg} 
               className="pg-gallery-img pg-gallery-img-big"
               onClick={() => ShowModal(`${imagesGallery[8].urlg}`)}
              />
            </div>
          </div>	
        </div>
      </main>
    </>
  )
}

export default Gallery;
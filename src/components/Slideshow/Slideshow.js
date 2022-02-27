import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';

const Slideshow = ({ slideRef }) => {
  const images = [
    '/images/background_image.jpg',
    '/images/background_image.jpg',
    '/images/background_image.jpg',
    '/images/background_image.jpg',
    '/images/background_image.jpg',
    '/images/background_image.jpg',
    '/images/background_image.jpg',
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
    arrows: false,
    autoplay: false,
  }
  return (
    <div>
      <Zoom ref={slideRef} {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;
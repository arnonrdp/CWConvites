import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export function About() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/gallery/carrossel1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/gallery/carrossel2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/gallery/carrossel3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

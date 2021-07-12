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
    <Carousel.Caption>
      <h5>Título Slide 1</h5>
      <p>Texto slide 1.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="/gallery/carrossel2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Título Slide 2</h5>
      <p>Texto slide 2.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="/gallery/carrossel3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Título Slide 3</h5>
      <p>Texto slide 3.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

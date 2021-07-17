import Image from 'react-bootstrap/image';

type PortfolioProps = {
  image: any;
  title: string;
  description: string;
}

export function Portfolio(props: PortfolioProps) {
  return (
    <div className="col">
      <div className="card h-100">
        <Image className="card-img-top" src={props.image} alt="foto do cartão" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">#categoriaA #categoriaB</small>
        </div>
      </div>
    </div>
  )
}

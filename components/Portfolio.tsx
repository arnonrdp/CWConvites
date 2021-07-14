import Image from 'next/image';
import styles from '../styles/Portfolio.module.css';

type PortfolioProps = {
  image: any;
  title: string;
  description: string;
}

export function Portfolio(props: PortfolioProps) {
  return (
    <div className={styles.container}>
      <Image
        src={props.image}
        alt={`${props.title} Image`}
        width={400}
        height={200}
        layout="intrinsic"
        className={styles.image}
      />
      <div className={styles.overlay}>{props.title}</div>
    </div>
  )
}
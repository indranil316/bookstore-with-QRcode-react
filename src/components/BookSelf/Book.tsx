import { Link } from 'react-router-dom';
import { Image } from '../common';
import styles from './BookSelf.module.scss';

interface BookProps{
    imageSrc?: string;
    href: string;
    imageAlt: string;
}

const Book: React.FC<BookProps> = ({imageSrc, imageAlt, href}) => {
  return (
    <Link to={'book'+href} className={styles.book}>
        {
          imageSrc? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={180}
              height={240}
          />
          ) : (
            <div className={styles.bookContent}>
              {imageAlt}
            </div>
          )
        }
    </Link>
  )
}

export default Book
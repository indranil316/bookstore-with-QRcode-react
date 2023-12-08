import TitleText from '../TitleText';
import Book from './Book';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './BookSelf.module.scss';
import { Container } from 'react-bootstrap';

interface BookSelfProps{
    books: Book[]
}

const BookSelf: React.FC<BookSelfProps> = ({books}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow:6,
    arrows: true,
    autoplay:true,
    responsive: [
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
            },
        },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: books.length > 5 ? 5 : books.length,
        },
      }
    ],
  };

  return (
    <Container fluid={'md'}>
      <TitleText title='Your Bookshelf' pattern='pattern1' />
      <div className={`${styles.booksWrap} mt-3 mt-lg-4`}>
        <Slider {...settings} className='w-100'>
          {books &&
            books.length > 0 &&
            books.map((book) => (
              <Book key={book.isbn} imageSrc={book.coverImage} imageAlt={book.bookName} href={`/${book.isbn}`} />
            ))}
        </Slider>
      </div>
    </Container>
  );
};

export default BookSelf;

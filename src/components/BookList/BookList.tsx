import { Container } from 'react-bootstrap';
import TitleText from '../TitleText';
import BookCard from './BookCard';

interface BookListProps{
    title: string;
    books: Book[];
    pattern?: 'pattern1' | 'pattern2' | 'none';
}

const BookList: React.FC<BookListProps> = ({title, books, pattern="none"}) => {
  return (
    <Container fluid="md">
        <TitleText title={title} pattern={pattern}/>
        <div className='d-flex flex-column align-items-center gap-3'>
        {
            books && books.length>0 && books.map((book, index)=>{
                return <BookCard book={book} key={book.isbn} index={index+1}/>
            })
        }
        </div>  
    </Container>
  )
}

export default BookList
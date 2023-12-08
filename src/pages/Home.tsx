import {useState, useEffect} from 'react';
import Header from '../components/Header/';
import BookSelf from '../components/BookSelf';
import BookList from '../components/BookList';
import useBookManagement from '../booksManagementHook';
import AddBook from '../components/AddBook';

const Home = () => {
  const { getBooks } = useBookManagement();
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
      fetchBooks();
      document.addEventListener('booksUpdated', fetchBooks);
      return () => {
        document.removeEventListener('customEvent', fetchBooks);
      };     
    }, []);


    const fetchBooks = () => {
      setTimeout(()=>{
        getBooks()
        .then((allbooks) => {
          var booksString = localStorage.getItem('books');
          var booksArray;
          if(booksString){
            booksArray = JSON.parse(booksString);
          }
          var savedBooks= typeof booksArray === 'object' && booksArray.length>0 ? [...booksArray] : [...allbooks];
          setBooks(savedBooks.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
 
      },1500);
    }
    return (
        <main>
            <Header/>
            <AddBook/>
            <BookSelf books={books}/>
            <BookList title='Our Favourities' books={books} pattern='pattern2'/>
        </main>
    )
}

export default Home
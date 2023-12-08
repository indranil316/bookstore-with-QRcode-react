import Header from '../components/Header/';
import BookList from '../components/BookList';
import BackButton from '../components/BackButton';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useBookManagement from '../booksManagementHook';


const Search = () => {
  const search = useLocation().search;
  const { searchBooks } = useBookManagement();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const searchKey = searchParams.get('key');
    if(searchKey && searchKey!==''){
      searchBooks(searchKey)
      .then(res=>{
        setBooks(res);
      })
      .catch(err=>{
        console.log(err);
        alert("OOPS! couldnt search books")
      })
    }
  }, [search])
  
  return (
    <main>
        <BackButton/>
        <Header/>
        {
          books.length === 0 ? <div>'Oops! No Books found'</div> : <BookList title='Your search results' books={books} pattern='pattern1'/>
        }
    </main>
  )
}

export default Search
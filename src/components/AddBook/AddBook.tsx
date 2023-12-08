import { Container } from "react-bootstrap";
import styles from './AddBook.module.scss';
import {useState} from 'react';
import AddBookForm from "./AddBookForm";
import useBookManagement from '../../booksManagementHook';

const AddBook = () => {
    const [formToggle, setFormToggle] = useState<boolean>(false);
    const [book, setBook] = useState<Book>({
        bookName:"",
        isbn:"",
        category:"",
        rowNo:0,
        bookCount:0,
        cost:0,
        availabity:true,
        isFavourite: true
    })
    const { addBook } = useBookManagement();
    const handleCick = async () => {
        if(formToggle){
            try{
                const res = await addBook(book);
                const customEvent = new CustomEvent('booksUpdated', { detail: { message: 'books updated' } });
                window.document.dispatchEvent(customEvent);
                alert(res);
            }
            catch(err){
                alert("Cannot add book");
            }
        }
        setFormToggle(!formToggle);
    }
    return (
        <Container>
            {formToggle && <AddBookForm book={book} setBook={setBook}/>}
            <button className={styles.btn} onClick={handleCick}>
                {formToggle ? 'Submit' : 'Add Book'}
            </button>
        </Container>
    );
}

export default AddBook;
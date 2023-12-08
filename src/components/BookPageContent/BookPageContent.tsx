import styles from './BookPageContent.module.scss';
import { Container } from 'react-bootstrap';
import { Image } from '../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import QRCode from 'react-qr-code';

interface BookPageContentProps{
    book: BookEdit,
    editBook: Function,
    removeBook: Function
}

const BookPageContent: React.FC<BookPageContentProps> = ({book, editBook, removeBook}) => {
    const navigate= useNavigate();
    const [isEditing, setEditing] = useState(false);
    const [editedValues, setEditedValues] = useState({
        bookName: book.bookName,
        category: book.category,
        cost: book.cost,
        rowNo: book.rowNo,
    });
    const submitEdit = (e: React.SyntheticEvent) =>{
        e.preventDefault();
        if (isEditing) {
            editBook(book.isbn, editedValues)
              .then((res: string) => {
                alert('Changes saved');
                console.log(res);
                navigate('/');
              })
              .catch((err: string) => {
                alert(err);
              });
        }
        setEditing(false);
    }
    const toggleEdit = () => {
        setEditedValues({
            bookName: book.bookName,
            category: book.category,
            cost: book.cost,
            rowNo: book.rowNo,
        })
        setEditing(true);
    };
    const cancelEdit = () => {
        setEditedValues({
          bookName: book.bookName,
          category: book.category,
          cost: book.cost,
          rowNo: book.rowNo,
        });
        setEditing(false);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedValues({ ...editedValues, [name]: value });
    };

    const del = async () => {
        let confirmation = window.confirm("Are you sure to delete this book?");
        if(!confirmation){
            return;
        }
        removeBook()
        .then((res:string)=>{
            alert("book removed");
            console.log(res);
            navigate('/');
        })
        .catch((err: string)=>{
            alert(err);
        })
    }
    return (
        <div className={`${styles.bookPage}`}>
            <Image
                src={book.coverImage}
                alt={book.bookName}
                className={styles.image}
            />
            <Container className='position-relative'>
                <div className={styles.iconsContainer}>
                    <button onClick={del}>
                        <FontAwesomeIcon size='xl' icon={faTrash} color='red'/>
                    </button>
                    {isEditing ? (
                        <button onClick={cancelEdit}>
                            <FontAwesomeIcon size='xl' icon={faXmark} color='black' />
                        </button>
                    ): (
                        <button onClick={toggleEdit}>
                            <FontAwesomeIcon size='xl' icon={faPenToSquare} color='green' />
                        </button>
                    )}
                </div>
                {isEditing ? (
                    <form onSubmit={submitEdit}>
                        <div className='d-flex flex-column gap-2'>
                            <div className='form-group'>
                                <label>Book Name</label>
                                <input
                                    type='text'
                                    name='bookName'
                                    value={editedValues.bookName}
                                    onChange={handleInputChange}
                                    className='form-control'
                                />
                            </div>
                            <div className='form-group'>
                                <label>Category</label>
                                <input
                                    type='text'
                                    name='category'
                                    value={editedValues.category}
                                    onChange={handleInputChange}
                                    className='form-control'
                                />
                            </div>
                            <div className="form-group">
                                <label>Cost</label>
                                <input 
                                    type='text' 
                                    name='cost' 
                                    value={editedValues.cost} 
                                    onChange={handleInputChange}  
                                    className='form-control'
                                />
                            </div>
                            <div className='form-group'>
                                <label>Row No</label>
                                <input 
                                    type='text' 
                                    name='rowNo' 
                                    value={editedValues.rowNo} 
                                    onChange={handleInputChange}  
                                    className='form-control'
                                />
                            </div>                    
                        </div>
                        <div className="btn-container mt-5">
                            <button type='submit' className='btn btn-primary'>Submit Changes</button>
                            <button type='button' className='btn btn-danger' onClick={cancelEdit}>
                                Cancel Changes
                            </button>
                        </div>
                    </form>
                ) : (
                <div>
                    <h3 className='fw-bold'>{book.bookName}</h3>
                    <h5>{book.category}</h5>
                    <p>
                    Cost: <span className='fw-bold'>{book.cost}$</span>
                    </p>
                    <p>Row: {book.rowNo}</p>
                    <small>{book.isbn}</small>
                </div>
                )}
                <div className={styles.qrcode}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={'http://'+window.location.host+'/'+book.isbn}
                        viewBox={`0 0 256 256`}
                    />
                </div>
            </Container>
        </div>
    )
}

export default BookPageContent
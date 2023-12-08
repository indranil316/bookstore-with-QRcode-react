import React from 'react';
import { Image } from '../common';
import styles from './BookList.module.scss';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';

interface BookCardProps{
    book: Book;
    index: number;
}

const BookCard: React.FC<BookCardProps> = ({book, index}) => {
    const colorClass = index%2===0 ? 'hawkesBlue' : 'roseWhite';
    return (
        <Link to={'/book/'+book.isbn} className={`d-flex position-relative ${styles.bookCard} ${styles[colorClass]}`}>
            {
                book.coverImage ? (
                    <Image
                        src={book.coverImage}
                        alt={book.bookName}
                        className={styles.image}
                    />
                ): (
                    <div className={styles.bookContent}>
                        {book.bookName}
                    </div>
                )
            }
            <div className={`ml-5 py-3 ${styles.cardContent}`}>
                <div className={styles.qrcode}>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={'https://'+window.location.host+'/book/'+book.isbn}
                        viewBox={`0 0 256 256`}
                    />
                </div>
                <h3 className='fw-bold'>{book.bookName}</h3>
                <p>{book.category}</p>
                <p>Cost: <span className='fw-bold'>{book.cost}$</span></p>
                <p>Row: {book.rowNo}</p>
                <small>{book.isbn}</small>
            </div>
        </Link>
    )
}

export default BookCard
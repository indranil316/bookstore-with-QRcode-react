import BackButton from "../components/BackButton";
import Header from "../components/Header";
import BookPageContent from "../components/BookPageContent";
import useBookManagement from "../booksManagementHook";
import { useParams } from "react-router-dom";
import { useEffect, useState} from 'react';
import { Container } from "react-bootstrap";

const BookPage = () => {
    const { getBookByIsbn, editBook, removeBook } = useBookManagement();
    const params = useParams();
    const [book, setBook] = useState<BookEdit>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const isbn = params['isbn'];
        if(isbn){
            getBookByIsbn(isbn)
            .then((res: Book)=>{
                setIsLoading(false);
                setBook(res);
            })
            .catch(err=>{
                console.log(err);
                setIsError(true);
            })
        }    
    }, [params])
    if(isError){
        return(
            <main>
                <Container>
                    No book found for isbn - {params['isbn']}
                </Container>
            </main>
        )
    }
    if(isLoading){
        return(
            <main>
                <Container>
                    Loading...
                </Container>
            </main>
        )
    }
    return (
        <main>
            <BackButton/>
            <Header hideSearch={true}/>
            {book && <BookPageContent book={{...book}} editBook={editBook} removeBook={removeBook}/>}
        </main>
    )
}

export default BookPage
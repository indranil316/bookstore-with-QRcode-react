import { useState, useEffect } from 'react';

var allbooks: Book[] = [
  {
    bookName: "The Silent Symphony",
    isbn: "978-0451524935",
    category: "Fiction",
    rowNo: 3,
    bookCount: 15,
    cost: 25.99,
    availabity: true,
    coverImage: "/images/books/978-0451524935.jpg",
    isFavourite: false
  },
  {
    bookName: "Quantum Realms",
    isbn: "978-0062315007",
    category: "Science Fiction",
    rowNo: 5,
    bookCount: 8,
    cost: 18.95,
    availabity: false,
    coverImage: "/images/books/978-0062315007.jpg",
    isFavourite: false
  },
  {
    bookName: "Historical Odyssey",
    isbn: "978-0743235152",
    category: "History",
    rowNo: 2,
    bookCount: 20,
    cost: 30.50,
    availabity: true,
    coverImage: "/images/books/978-0743235152.jpg",
    isFavourite: true
  },
  {
    bookName: "Gourmet Delights",
    isbn: "978-0307279228",
    category: "Cooking",
    rowNo: 1,
    bookCount: 12,
    cost: 22.75,
    availabity: true,
    coverImage: "/images/books/978-0307279228.jpg",
    isFavourite: true
  },
  {
    bookName: "Mindful Living",
    isbn: "978-0349427351",
    category: "Self-Help",
    rowNo: 4,
    bookCount: 17,
    cost: 15.99,
    availabity: true,
    coverImage: "/images/books/978-0349427351.jpg",
    isFavourite: true
  },
  {
    bookName: "Wildlife Wonders",
    isbn: "978-1426217124",
    category: "Nature",
    rowNo: 6,
    bookCount: 10,
    cost: 28.00,
    availabity: true,
    coverImage: "/images/books/978-1426217124.jpg",
    isFavourite: true
  },
  {
    bookName: "Poetry in Motion",
    isbn: "978-0143125484",
    category: "Poetry",
    rowNo: 7,
    bookCount: 25,
    cost: 12.50,
    availabity: true,
    coverImage: "/images/books/978-0143125484.jpg",
    isFavourite: true
  }
];

var booksString = localStorage.getItem('books');
var booksArray;
if(booksString){
  booksArray = JSON.parse(booksString);
}
var savedBooks= typeof booksArray === 'object' && booksArray.length>0 ? [...booksArray] : [...allbooks];

const useBookManagement = () => {
  const [books, setBooks] = useState<Book[]>(savedBooks);

  useEffect(()=>{
    localStorage.setItem('books', JSON.stringify(books));
  },[books])

  const getBooks = (): Promise<Book[]> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(books);
      }, 0);
    });

  const addBook = (book: Book): Promise<string> =>
    new Promise((resolve) => {
      setTimeout(() => {
        setBooks((prevBooks) => {
          localStorage.setItem('books', JSON.stringify([...prevBooks, book]))
          return [...prevBooks, book]
        });
        resolve('Book added');
      }, 0);
    });

  const removeBook = (searchText: string): Promise<Book[]> =>
    new Promise((resolve) => {
      setTimeout(() => {
        const newBooks = books.filter((book) => book.bookName.includes(searchText) || book.isbn.includes(searchText));
        setBooks(newBooks);
        resolve(newBooks);
      }, 0);
    });

  const editBook = (isbn: string, bookEdit: BookEdit): Promise<Book[]> =>
    new Promise((resolve) => {
      setTimeout(() => {
        const newBooks: Book[] = books.map((book) => {
          if (book.isbn === isbn) {
            for (const prop in bookEdit) {
              if (book.hasOwnProperty(prop)) {
                // @ts-ignore
                book[prop] = bookEdit[prop];
              }
            }
          }
          return book;
        });
        setBooks(newBooks);
        resolve(newBooks);
      }, 0);
    });
  const searchBooks = (key: string): Promise<Book[]> => {
    key=key.toLowerCase();
    return new Promise((resolve, reject)=>{
      const newBooks: Book[] = books.filter(book => {
        if(book.bookName.toLowerCase().includes(key) || book.isbn.toLowerCase().includes(key)){
          return book;
        }
      })
      resolve(newBooks);
    })
  }
  const getBookByIsbn = (isbn: string) : Promise<Book> => {
    return new Promise((resolve, reject)=>{
      const book = books.find(book=>book.isbn === isbn);
      if(book){
        resolve(book);
      }
      reject("Cannot find book");
    })
  }
  useEffect(() => {
    getBooks().then((initialBooks) => setBooks(initialBooks));
  }, []);

  return {
    books,
    getBooks,
    addBook,
    removeBook,
    editBook,
    searchBooks,
    getBookByIsbn
  };
};

export default useBookManagement;

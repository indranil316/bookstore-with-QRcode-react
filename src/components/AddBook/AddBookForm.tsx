import Form from 'react-bootstrap/Form';


interface AddBookFormProps{
  book: Book;
  setBook: Function
}

const AddBookForm: React.FC<AddBookFormProps> = ({book, setBook}) => {
  const setState = (name: string, value: string | number | boolean) => {
    setBook({
      ...book,
      [name]: value,
    });
  };
  const onChangeHandler = (e : any) => {
    const { name, value } = e.target;
    setState(name, value);
  };
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter book name" name='bookName' value={book.bookName} onChange={onChangeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="text" placeholder="Enter book ISBN" value={book.isbn} name="isbn" onChange={onChangeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter book Category" value={book.category} name="category" onChange={onChangeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Row No</Form.Label>
        <Form.Control type="number" placeholder="Enter row no" value={book.rowNo} name="rowNo" onChange={onChangeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Count</Form.Label>
        <Form.Control type="number" placeholder="Enter book count" value={book.bookCount} name="bookCount" onChange={onChangeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cost</Form.Label>
        <Form.Control type="number" placeholder="Enter Cost" value={book.cost} name="cost" onChange={onChangeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label>Availability</Form.Label>
          <Form.Select value={Number(book.availabity)} name='availabity' onChange={onChangeHandler}>
            <option value={1}>true</option>
            <option value={0}>false</option>
          </Form.Select>
        </Form.Group>
    </Form>
  );
}

export default AddBookForm;
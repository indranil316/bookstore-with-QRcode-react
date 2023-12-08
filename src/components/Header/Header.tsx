import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Form, InputGroup , Container } from 'react-bootstrap';
import { Image } from '../common';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps{
  hideSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({hideSearch=false}) => {
  const navigate = useNavigate();
  const [searchKey, setSearchkey] = useState("");

  const searchSubmit = () => {
    navigate(`/search?key=${searchKey}`)
  }
  return (
    <header className='py-5 position-relative'>
      <Image
        src="/images/shape-3.png"
        alt="Decoration"
        width={280}
        height={120}
        className={`position-absolute ${styles.headerDecor}`}
      />
      <Container className={`${styles.higherIndex}`}>
        <Form className="d-flex" onSubmit={searchSubmit} >           
            <InputGroup className={`${styles.searchBar} ${hideSearch && 'invisible'}`}>
                <InputGroup.Text className={styles.inputGroupText}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </InputGroup.Text>                    
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className={`me-2 ${styles.textField}`}
                    aria-label="Search"
                    value={searchKey}
                    onChange={(e)=>{setSearchkey(e.target.value)}}
                />
            </InputGroup>       
            <Image
                src="/images/user.jpeg"
                alt="Indranil's Image"
                width={42}
                height={42}
                className={styles.image}
            />
        </Form>
      </Container>
    </header>
  );
}

export default Header;
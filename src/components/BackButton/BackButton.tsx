import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styles from './BookButton.module.scss';

const BackButton = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/')
    }
    return (
        <button className={`position-absolute ${styles.backButton}`} onClick={goHome}>
            <FontAwesomeIcon icon={faChevronLeft} size='xl'/>
        </button>
    )
}

export default BackButton
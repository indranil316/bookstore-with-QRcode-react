import { Image } from '../common';
import styles from './TitleText.module.scss';

interface TitleTextProps{
    title: string;
    pattern: 'pattern1' | 'pattern2' | 'none';
}

const TitleText : React.FC<TitleTextProps> = ({title, pattern}) => {
    return (
        <>
            {pattern === 'pattern2' ? (
                <div className={`position-relative my-4 ${styles.pattern2}`}>
                    <h1>{title}</h1>
                    <Image 
                        src="/images/shape-3.png"
                        alt="Decorator Image"
                        width={80}
                        height={80}
                    />
                </div>
            ): (
                <h1 className={`position-relative ${styles[pattern]}`}>{title}</h1>
            )}
        </>
    )
}

export default TitleText
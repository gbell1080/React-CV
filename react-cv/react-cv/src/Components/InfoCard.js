import './InfoCard.css';
import { FaBars } from 'react-icons/fa';

function InfoCard({ paragraph, title, bullets }) {

    return (
        <div className='InfoCard'>
            <h2>{title}</h2>
            {paragraph && <p>{paragraph}</p>}
            {paragraph && <br />}
            {bullets && <ul>{bullets}</ul>}
        </div>
    );
}

export default InfoCard;
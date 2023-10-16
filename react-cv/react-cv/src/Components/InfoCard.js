import './InfoCard.css';

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
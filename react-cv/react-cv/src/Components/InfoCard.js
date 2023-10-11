import './InfoCard.css';

function InfoCard({ paragraph, title, bullets }) {

    return (
        <div className='InfoCard'>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    );
}

export default InfoCard;
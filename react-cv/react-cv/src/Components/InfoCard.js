import './InfoCard.css';

function InfoCard({ paragraph }) {
    return (
        <div className='InfoCard'>
            <h2>A bit about me</h2>
            <p>{paragraph}</p>
        </div>
    )
}

export default InfoCard;
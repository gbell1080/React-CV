import './ActiveCard.css';
import './ProgressCircle.js'

function ActiveCard({ title, content }) {
    return (
        <div className='ActiveCard'>
            <h2>{title}</h2>
            {content}
        </div>
    )
}

export default ActiveCard;
import "./ProgressCircle.css"
let circleColor = '';
let progressPrecentage = null;
function ProgressCircle({ percentage }) {
    progressPrecentage = percentage;
    {
        if (percentage > 0.7) {
            circleColor = "#56FF6A";
        } else if (percentage > 0.4) {
            circleColor = "#CCBF6E";
        } else {
            circleColor = "#CC5C4D";
        }
    }
    return (
        <div className="ProgressCircleContainer">
            <div className="Progresss">
                {/* used docs to figure out conditional rendering, Alex would be proud */}
                <svg>
                    <circle cx="148" cy="148" r="144" style={{ stroke: circleColor, 'stroke-dasharray': 904 * progressPrecentage + ' 904' }}></circle>
                </svg>
                <div className="Percentage">
                    <p>{percentage * 100 + '%'}</p>
                </div>
            </div>
        </div >
    )
}

export default ProgressCircle;
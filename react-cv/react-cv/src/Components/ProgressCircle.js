import "./ProgressCircle.css"

function ProgressCircle() {
    return (
        <div Classname="ProgressCircleContainer">
            <div Classname="Progresss">
                <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div Classname="percentage">
                    <p>+81%</p>
                </div>
            </div>
        </div>
    )
}

export default ProgressCircle;
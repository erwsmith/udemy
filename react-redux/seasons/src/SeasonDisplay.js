import './SeasonDisplay.css';
import React from 'react';

// Put helpers at the top:
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Brr, it's cold!",
        iconName: "snowflake"
    }
}


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        // return result of JS ternary expression
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
}


// Put components at the bottom:
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]

    return (
        <div className={ `season-display ${season}` }>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    ) 
}

export default SeasonDisplay
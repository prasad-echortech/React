import React from 'react';
import MadeGoal from './MadeGoal';
import MissedGoal from './MissedGoal';
function Goal(props) {
    const isGoal = props.isGoal;
    // if (isGoal) {
    //     return <MadeGoal />
    // } else {
    //     return <MissedGoal />
    // }

    return (
        <>
            <MadeGoal />
            <div>
                <h1>Iam Just A Goal</h1>
                <h1>{isGoal ? <MadeGoal /> : <MissedGoal />}</h1>
            </div>
        </>

    );
}

export default Goal;
